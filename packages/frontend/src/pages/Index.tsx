import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PetitionForm } from "@/components/PetitionForm";
import { StatCard } from "@/components/StatCard";
import { Home, Users, Car, AlertTriangle, MessageSquare } from "lucide-react";
import carparkHero from "@/assets/victoria-way-carpark.jpg";
import enterprisePlace from "@/assets/enterprise-place.jpg";
import dukesCourt from "@/assets/dukes-court.jpg";
import unusedSite from "@/assets/unused-site.jpg";
import emptyBuildingParking from "@/assets/empty-building-parking.jpg";
import asahiBuilding from "@/assets/asahi-building.jpg";
import doubletreeHilton from "@/assets/doubletree-hilton.jpg";
import { useNavigate } from "react-router-dom";
import { usePetitions } from "@/state";

const STATIC_TESTEMONIES = [
	{
		name: "Marne Keefe",
		comment:
			"My daughter & her Fiancé moved into Enterprise Place last October, they saved for a long time & one of the deciding factors on purchasing their first home was Victoria Way car park. My daughter has a degenerative back disorder & ME. Since having to park in the Peacocks car park & walk through Woking after work she has been jeered at, whistled at & narrowly avoided being kicked in the face by a youth to name just a few very upsetting situations she has been confronted with. She feels unsafe & anxious, it has become a major upset to her & her partner.",
		date: "1 week ago",
	},
	{
		name: "John Costa",
		comment:
			"I used to use Victoria Way carpark everyday. My wife would come home and park her car there as she drivers to work everyday. Now she has to walk through town centre every time she goes and comes from work. Sometimes at night. This is not safe, not is it what we signed up for when we purchased our flat in Enterprise Place.",
		date: "1 week ago",
	},
	{
		name: "Rio Keefe",
		comment:
			"I am a resident of Enterprise Place. I go to work early and come home late, it is not safe for me - a young woman - to be forced to walk through the town center and main roads in the dark every night to get to my home. Not to mention the toll it takes on me with my chronic illness. I have been shouted at, stared at and almost assaulted having to do this in the last seven months.",
		date: "1 week ago",
	},
];

const Index = () => {
	const navigate = useNavigate();

	const { signatures } = usePetitions();

	const scrollToPetition = () => {
		document.getElementById("petition")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section with Petition */}
			<section className="relative min-h-[700px] flex items-center justify-center text-center overflow-hidden py-16">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${carparkHero})` }}
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

				<div className="relative z-10 max-w-4xl mx-auto px-6">
					<h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
						Victoria Way Carpark: Woking Needs Parking Solutions
					</h1>
					<p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
						We support safety-first action, but this area of Woking needs
						adequate parking and communication from the council
					</p>

					<div className="bg-card/95 backdrop-blur-sm rounded-lg p-8 shadow-[var(--shadow-elevated)] mb-6">
						<div className="mb-6">
							<h2 className="text-3xl font-bold text-primary mb-2">
								Sign the Petition
							</h2>
							<p className="text-lg text-muted-foreground">
								{signatures.length > 0 && (
									<span className="font-semibold text-accent">
										{signatures.length} people
									</span>
								)}
								{signatures.length > 0 ? " have" : "Be the first to"} signed so
								far
							</p>
						</div>
						<PetitionForm compact />
					</div>
				</div>
			</section>

			{/* Impact Stats */}
			<section className="py-16 px-6 bg-muted">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<StatCard icon={Home} number="120+" label="Affected Households" />
						<StatCard icon={Users} number="300+" label="Residents Impacted" />
						<StatCard icon={Car} number="0" label="Parking Spaces Provided" />
						<StatCard
							icon={AlertTriangle}
							number="0"
							label="Council Updates Since Closure"
						/>
					</div>
				</div>
			</section>

			{/* Affected Area */}
			<section className="py-16 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-primary mb-8 text-center">
						The Affected Area
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
							<img
								src={carparkHero}
								alt="Victoria Way Carpark"
								className="w-full h-[300px] object-cover"
							/>
							<div className="bg-card p-4 border-t border-border">
								<h3 className="font-semibold text-lg text-primary">
									Victoria Way Carpark
								</h3>
								<p className="text-sm text-muted-foreground">
									Closed due to safety concerns
								</p>
							</div>
						</div>
						<div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
							<img
								src={enterprisePlace}
								alt="Enterprise Place"
								className="w-full h-[300px] object-cover"
							/>
							<div className="bg-card p-4 border-t border-border">
								<h3 className="font-semibold text-lg text-primary">
									Enterprise Place
								</h3>
								<p className="text-sm text-muted-foreground">
									Residents and workers without parking
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Problem Statement */}
			<section className="py-16 px-6 bg-muted">
				<div className="max-w-4xl mx-auto">
					<div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
						<h3 className="text-xl font-semibold text-primary mb-2">
							We Thank the Council for Prioritising Safety
						</h3>
						<p className="text-foreground">
							We understand that Victoria Way Carpark was closed due to safety
							concerns, and we fully support putting public safety first. The
							council made the right decision to act on these concerns.
						</p>
					</div>

					<h2 className="text-4xl font-bold text-primary mb-8 text-center">
						The Problems We Face Today
					</h2>
					<div className="prose prose-lg max-w-none text-foreground space-y-6">
						<p className="text-lg leading-relaxed">
							However, since the closure, residents and workers in this area of
							Woking have been left without communication or parking solutions.
							We are asking the council to address three critical issues:
						</p>
						<div className="bg-card p-8 rounded-lg shadow-[var(--shadow-card)] border border-border">
							<h3 className="text-2xl font-semibold text-primary mb-4">
								What Woking Needs:
							</h3>
							<ul className="space-y-3 text-foreground">
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">1.</span>
									<span>
										<strong>Regular Updates:</strong> No information has been
										provided on safety surveys, remediation progress, or future
										plans for the site
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">2.</span>
									<span>
										<strong>Parking in This Area:</strong> This part of Woking
										needs adequate parking facilities for residents, workers,
										and visitors
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">3.</span>
									<span>
										<strong>Recognition of Impact:</strong> Parents, elderly
										residents, disabled individuals, night workers, and local
										businesses face daily hardship and safety risks
									</span>
								</li>
							</ul>
						</div>
						<div className="bg-muted p-6 rounded-lg border border-border mt-6">
							<p className="text-foreground font-medium">
								<strong>This area deserves proper parking:</strong> Without
								adequate parking facilities, families struggle with shopping,
								elderly and disabled residents face accessibility challenges,
								night shift workers worry about safety, and local businesses
								lose customers.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Potential Solutions */}
			<section className="py-16 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-primary mb-8 text-center">
						Potential Solutions for Woking Residents
					</h2>

					<div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
						<h3 className="text-xl font-semibold text-primary mb-2">
							The Ideal Solution Already Exists
						</h3>
						<p className="text-foreground">
							The DoubleTree Hilton hotel, located directly in front of
							Enterprise Place, has an underground car park that runs beneath
							Enterprise Place itself. This existing infrastructure could
							provide immediate relief to residents. Why don't Enterprise Place
							residents have access to parking that sits directly beneath their
							homes?
						</p>
					</div>

					<div className="mb-12">
						<h3 className="text-2xl font-semibold text-primary mb-6">
							Short-Term Solutions
						</h3>
						<div className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)] border border-border mb-8">
							<ul className="space-y-3 text-foreground">
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">•</span>
									<span>
										Negotiate with nearby facilities like Dukes Court and the
										Asahi Building for shared parking arrangements
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">•</span>
									<span>
										Convert unused building sites in the area to temporary
										parking facilities
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">•</span>
									<span>
										Utilize underutilized parking at empty buildings in the
										vicinity
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">•</span>
									<span>
										Temporary parking permits for affected Enterprise Place
										residents in nearby council-owned spaces
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">•</span>
									<span>
										Discounted rates at Victoria Place and other town centre
										carparks for registered residents
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="mb-12">
						<h3 className="text-2xl font-semibold text-primary mb-6">
							Long-Term Solutions
						</h3>
						<div className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)] border border-border mb-8">
							<ul className="space-y-3 text-foreground">
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">1.</span>
									<span>
										<strong>
											Provide Enterprise Place residents access to the
											DoubleTree Hilton underground car park
										</strong>{" "}
										- the infrastructure already exists beneath their building
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">2.</span>
									<span>
										Repair and reopen Victoria Way Carpark with proper safety
										measures
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">3.</span>
									<span>
										Build new multi-storey parking facility in this area of
										Woking
									</span>
								</li>
								<li className="flex items-start">
									<span className="text-accent font-bold mr-3">4.</span>
									<span>
										Dedicated resident parking zones with permit systems
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="mb-12">
						<h3 className="text-2xl font-semibold text-primary mb-6">
							Available Parking Infrastructure
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)] border-2 border-accent">
								<img
									src={doubletreeHilton}
									alt="DoubleTree Hilton with underground parking beneath Enterprise Place"
									className="w-full h-[250px] object-cover"
								/>
								<div className="bg-accent/5 p-4 border-t-2 border-accent">
									<h3 className="font-semibold text-lg text-primary">
										DoubleTree Hilton - The Ideal Solution
									</h3>
									<p className="text-sm text-foreground font-medium">
										Underground car park directly beneath Enterprise Place -
										existing infrastructure that could solve the problem
										immediately
									</p>
								</div>
							</div>

							<div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
								<img
									src={asahiBuilding}
									alt="Asahi Building with underground parking"
									className="w-full h-[250px] object-cover"
								/>
								<div className="bg-card p-4 border-t border-border">
									<h3 className="font-semibold text-lg text-primary">
										Asahi Building
									</h3>
									<p className="text-sm text-muted-foreground">
										Underground parking facility that could accommodate
										residents through negotiation
									</p>
								</div>
							</div>

							<div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
								<img
									src={unusedSite}
									alt="Unused building site that could be converted to parking"
									className="w-full h-[250px] object-cover"
								/>
								<div className="bg-card p-4 border-t border-border">
									<h3 className="font-semibold text-lg text-primary">
										Unused Building Site
									</h3>
									<p className="text-sm text-muted-foreground">
										This nearby site has been closed for a while and could be
										temporarily converted to parking
									</p>
								</div>
							</div>

							<div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
								<img
									src={dukesCourt}
									alt="Dukes Court with car park facilities"
									className="w-full h-[250px] object-cover"
								/>
								<div className="bg-card p-4 border-t border-border">
									<h3 className="font-semibold text-lg text-primary">
										Dukes Court
									</h3>
									<p className="text-sm text-muted-foreground">
										Nearby facility with parking that could be part of the
										solution
									</p>
								</div>
							</div>

							<div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
								<img
									src={emptyBuildingParking}
									alt="Empty building with available parking spaces"
									className="w-full h-[250px] object-cover"
								/>
								<div className="bg-card p-4 border-t border-border">
									<h3 className="font-semibold text-lg text-primary">
										Underutilized Parking
									</h3>
									<p className="text-sm text-muted-foreground">
										Empty building with existing parking infrastructure that
										could serve residents
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg">
						<h3 className="text-xl font-semibold text-primary mb-2">
							We Need Communication
						</h3>
						<p className="text-foreground">
							The council hasn't shared any updates on remediation timelines,
							safety surveys, or plans for alternative parking. Regular
							communication would help residents plan and understand what
							solutions are being considered for this area.
						</p>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 px-6 bg-muted">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-primary mb-4 text-center">
						Hear from Your Constituents
					</h2>
					<p className="text-xl text-muted-foreground mb-12 text-center">
						Real stories from real Woking residents affected by this decision
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						<TestimonialCard {...STATIC_TESTEMONIES[0]} />
						<TestimonialCard {...STATIC_TESTEMONIES[1]} />
						<TestimonialCard {...STATIC_TESTEMONIES[2]} />
					</div>
					<div className="text-center">
						<Button
							size="lg"
							onClick={() => navigate("/testimonies")}
							className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
						>
							<MessageSquare className="w-5 h-5" />
							Read All {signatures.length > 0 && `${signatures.length} `}
							Testimonies
						</Button>
					</div>
				</div>
			</section>

			{/* Additional Petition Section */}
			<section id="petition" className="py-16 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-primary mb-4">
						Add Your Story
					</h2>
					<p className="text-xl text-muted-foreground mb-12">
						Share why this matters to you and add your full testimony to the
						petition
					</p>
					<PetitionForm />
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-16 px-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-4">Every Signature Counts</h2>
					<p className="text-lg mb-8 text-primary-foreground/90">
						Help us show Woking Council that this area deserves communication,
						updates, and adequate parking facilities
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							onClick={scrollToPetition}
							className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground font-semibold shadow-[var(--shadow-elevated)]"
						>
							Sign the Petition
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground font-semibold"
						>
							Share This Campaign
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 px-6 bg-card border-t border-border">
				<div className="max-w-6xl mx-auto text-center text-muted-foreground">
					<p>
						© 2025 Save Victoria Way Carpark Campaign | For the residents and
						workers of Woking
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Index;
