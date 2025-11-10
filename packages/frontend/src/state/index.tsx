import { signPetition } from "@/network";
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from "react";
import { toast } from "sonner";
import { signedPetitionSchema, signPetitionSchema } from "types";
import { z } from "zod";

// submitted is used to determine if the signature was inserted correctly
type SignatureWithState = z.infer<typeof signedPetitionSchema> & {
	submitted: boolean;
};

type PetitionStateType = {
	signatures: SignatureWithState[];
	onSignPetition: (
		petition: z.infer<typeof signPetitionSchema>,
	) => Promise<void>;
};

const PetitionState = createContext<PetitionStateType>({
	signatures: [],
	onSignPetition: async () => {},
});

export const PetitionStateProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [signatures, setSignatures] = useState<PetitionStateType["signatures"]>(
		[],
	);

	const onSignPetition = useCallback<PetitionStateType["onSignPetition"]>(
		async (signature) => {
			const eagerPetitionId = Date.now().toString();

			setSignatures((petitions) => [
				{
					id: eagerPetitionId,
					createdAt: new Date().toISOString(),
					submitted: false,
					...signature,
				},
				...petitions,
			]);

			try {
				await signPetition(signature);

				setSignatures((petitions) => {
					const newPetitionIndex = petitions.findIndex(
						(p) => p.id === eagerPetitionId,
					);

					if (newPetitionIndex === -1) {
						throw new Error(
							`new inserted petition not found: id: ${eagerPetitionId}`,
						);
					}

					petitions[newPetitionIndex].submitted = true;

					return [...petitions];
				});

				toast.error(
					"Sorry, had a problem inserting your signature. Please try again.",
				);
			} catch (err) {
				console.warn(err);

				setSignatures((petitions) =>
					petitions.filter((p) => p.id === eagerPetitionId),
				);

				toast.error(
					"Sorry, had a problem inserting your signature. Please try again.",
				);
			}
		},
		[],
	);

	return (
		<PetitionState.Provider value={{ signatures: signatures, onSignPetition }}>
			{children}
		</PetitionState.Provider>
	);
};

export const usePetitions = () => useContext(PetitionState);
