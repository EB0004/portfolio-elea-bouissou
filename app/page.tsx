import GalleryReveal from "./components/GalleryReveal";

const projects = [
  {
    id: "jermene",
    index: "01",
    title: "Jermène",
    eyebrow: "Communication · Direction artistique",
    summary:
      "Donner une nouvelle vie aux objets, mais aussi à la manière de les regarder.",
    image: "/images/jermene-table.png",
    color: "cream",
    tags: ["Shootings", "Merchandising", "Social media"],
    detail:
      "Coordination de shootings, calendrier éditorial, benchmark, partenariats et scénographies pour une boutique hybride dédiée à la seconde main et à l’artisanat français.",
    gallery: [
      { src: "/images/jermene-rings.png", alt: "Direction artistique autour des bijoux et des arts de la table" },
      { src: "/images/jermene-earrings.png", alt: "Boucles d’oreilles mises en scène sur un verre" },
      { src: "/images/jermene-vases.png", alt: "Collection de vases colorés Jermène" },
    ],
  },
  {
    id: "humani",
    index: "02",
    title: "HUMANI",
    eyebrow: "Management · Impact social",
    summary:
      "Construire un pôle, mobiliser une équipe et transformer la prospection en impact concret.",
    image: "/images/humani-team.jpg",
    color: "yellow",
    tags: ["345 entreprises", "17 dons", "5 % de conversion"],
    detail:
      "Pendant l’année, j’ai créé et structuré le pôle prospection, conduit plus de 40 entretiens et encadré 9 bénévoles. Devenue Vice-Présidente, j’ai ensuite coordonné les cinq branches de l’association. Ce travail collectif a permis d’obtenir 17 dons et de collecter 2 940 €, dont 2 600 € ont été investis dans la mission à Dakar.",
    quote:
      "À Dakar, les indicateurs ont pris une réalité concrète : des instruments, un jardin rénové et de nouveaux équipements pédagogiques. J’y ai découvert la Teranga, cette hospitalité qui se vit dans les gestes les plus simples, et compris tout le sens du travail mené pendant l’année.",
    gallery: [
      { src: "/images/humani-music.png", alt: "Atelier de musique rendu plus participatif grâce aux nouveaux instruments" },
      { src: "/images/humani-cooking.png", alt: "Atelier de cuisine avec les enfants de l’Empire des Enfants" },
      { src: "/images/humani-field.png", alt: "Moment partagé avec les enfants à Dakar" },
    ],
  },
  {
    id: "hospitality",
    index: "03",
    title: "Hospitality",
    eyebrow: "Événementiel · Expérience client",
    summary:
      "Faire vivre un événement avec énergie, précision et attention.",
    image: "/images/golf-service.jpg",
    color: "coral",
    imageClass: "focus-elea",
    tags: ["80–300 invités", "Service", "Coordination terrain"],
    detail:
      "Au sein de l’équipe restauration du Golf Club de Toulouse : préparation des espaces, mise en place et service pendant des réceptions de 80 à 300 invités, avec exigence, réactivité et attention portée à chaque détail.",
    gallery: [
      { src: "/images/golf-event.jpg", alt: "Nocturne accueillant plusieurs centaines d’invités" },
      { src: "/images/golf-bar-ambience.jpg", alt: "Ambiance de réception et mise en place du bar pendant une Nocturne du golf" },
    ],
  },
  {
    id: "champagne",
    index: "04",
    title: "Champagne",
    eyebrow: "Patrimoine · Expérience de marque",
    summary:
      "Découvrir un savoir-faire pour mieux imaginer les expériences qui le racontent.",
    image: "/images/champagne-barrels.png",
    color: "black",
    tags: ["Visites de caves", "Dégustations", "Conférences"],
    detail:
      "Organisation de rencontres et d’expériences au sein du pôle Champagne d’ACCES, au contact des Maisons et de leur patrimoine.",
    gallery: [
      { src: "/images/champagne-tasting.png", alt: "Préparation d’une dégustation de Champagne" },
      { src: "/images/champagne-pierre-mignon.png", alt: "Visite-dégustation à la Maison Champagne Pierre Mignon" },
    ],
  },
  {
    id: "thales",
    index: "05",
    title: "THALES",
    eyebrow: "Business development · Marketing B2B",
    summary:
      "Faire du marketing un levier commercial, de la donnée jusqu’au terrain.",
    image: null,
    color: "thales",
    tags: ["5 comptes stratégiques", "2 salons internationaux", "43 k€ pilotés"],
    detail:
      "Développement de services cybersécurité auprès de compagnies aériennes, profiling de comptes, analyse de campagnes Google Ads et coordination opérationnelle de deux salons internationaux représentant environ 9 500 visiteurs professionnels.",
    gallery: [
      { label: "Leads & CRM", detail: "Qualification de compagnies aériennes, profiling de comptes et suivi Salesforce." },
      { label: "WAF · Londres", detail: "Préparation opérationnelle, visibilité de marque et activation commerciale." },
      { label: "A-ISAC · Zurich", detail: "Pilotage du sponsoring Gold, coordination et analyse de performance." },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour en haut">
          Eléa Bouissou
        </a>
        <nav aria-label="Navigation principale">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#journey">Parcours</a>
          <a href="#personality">Mon univers</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="mini-cta" href="#contact">
          Me contacter <span>↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Portfolio · Marketing & expériences</p>
          <h1>
            Créer des
            <br />
            expériences
            <br />
            <span>qui ont du sens</span>
          </h1>
          <p className="disciplines">
            <strong>Marketing</strong> <i>•</i> Événementiel <i>•</i>{" "}
            Expérience client
          </p>
          <div className="availability">
            <span className="pulse" />
            Stage 6 mois — Janvier 2027
          </div>
          <a className="primary-cta" href="#projects">
            Découvrir mes projets <span>↘</span>
          </a>
        </div>

        <div className="hero-stage" aria-label="Portrait et aperçu des projets">
          <div className="portrait-card">
            <img src="/images/portrait-warm.jpg" alt="Portrait d’Eléa Bouissou" />
          </div>
          <a className="floating-card card-jermene" href="#jermene">
            <span>Jermène</span>
            <img className="hero-jermene-image" src="/images/jermene-red-jewels.png" alt="" />
          </a>
          <a className="floating-card card-humani" href="#humani">
            <span>HUMANI</span>
            <img src="/images/humani-team.jpg" alt="" />
          </a>
          <a className="floating-card card-golf" href="#hospitality">
            <span>Hospitality</span>
            <div className="golf-duo">
              <img src="/images/golf-cocktail-flowers.png" alt="" />
              <img className="focus-elea" src="/images/golf-service.jpg" alt="" />
            </div>
          </a>
          <a className="floating-card card-champagne" href="#champagne">
            <span>Champagne</span>
            <img className="hero-champagne-image" src="/images/champagne-tasting.png" alt="" />
          </a>
          <a className="floating-card card-thales" href="#thales">
            <span>THALES</span>
            <small>Marketing B2B · Cybersecurity</small>
          </a>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Continuer">
          <span>Scroll</span> ↓
        </a>
      </section>

      <section className="about" id="about">
        <div className="section-number">01 — À propos</div>
        <div className="about-copy">
          <p className="about-lead">
            J’aime les projets qui se <em>vivent</em>, se partagent et laissent
            une impression durable.
          </p>
          <div className="about-grid">
            <p>
              À la croisée du marketing, du développement commercial et de
              l’expérience client, j’avance avec une approche structurée,
              sensible au détail et profondément ancrée dans le terrain.
            </p>
            <p>
              Mon fil conducteur : comprendre un univers, trouver ce qui le
              rend singulier, puis créer les conditions pour que les autres le
              ressentent à leur tour.
            </p>
          </div>
        </div>
        <div className="character-signature" aria-label="Traits de personnalité">
          <span>Curieuse</span>
          <span>Engagée</span>
          <span>Créative</span>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-heading">
          <div className="section-number">02 — Projets sélectionnés</div>
          <h2>Des idées aux expériences.</h2>
          <p>Explorez les projets et découvrez leurs coulisses.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.color}`}
              id={project.id}
              key={project.id}
            >
              <div className="project-visual">
                {project.id === "hospitality" ? (
                  <div className="golf-project-duo">
                    <img src="/images/golf-cocktail-flowers.png" alt="Mise en place florale pour une réception sur le golf" />
                    <img className="focus-elea" src="/images/golf-service.jpg" alt="Eléa en service pendant une réception" />
                  </div>
                ) : project.image ? (
                  <img
                        className={`${"imageClass" in project ? project.imageClass : ""} ${project.id === "jermene" ? "jermene-project-image" : ""} ${project.id === "humani" ? "humani-project-image" : ""}`}
                    src={project.image}
                    alt={`Projet ${project.title}`}
                  />
                ) : (
                  <div className="thales-visual" aria-label="Repères du projet THALES">
                    <span>TOULOUSE</span>
                    <strong>Cybersecurity<br />Services</strong>
                    <div>
                      <small>WAF · LONDON</small>
                      <small>A-ISAC · ZURICH</small>
                    </div>
                  </div>
                )}
                <span className="project-index">{project.index}</span>
              </div>
              <div className="project-content">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <p className="project-detail">{project.detail}</p>
                {"quote" in project && (
                  <blockquote className="project-quote">{project.quote}</blockquote>
                )}
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.id !== "thales" && (
                  <GalleryReveal
                    projectId={project.id}
                    projectTitle={project.title}
                    items={project.gallery}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="section-number">03 — Rétrospective</div>
        <div className="journey-title">
          <p>Une trajectoire</p>
          <h2>entre stratégie, création et terrain.</h2>
        </div>
        <div className="timeline">
          <article>
            <span>Déc. 2022–juil. 2024</span>
            <h3>Restauration · Pizzeria</h3>
            <p>Un emploi étudiant mené en parallèle de mes études : constance, rythme et sens du collectif.</p>
          </article>
          <article>
            <span>Juin–juil. 2023</span>
            <h3>La Boutique Fleur</h3>
            <p>Conseil, compositions personnalisées et gestion quotidienne du point de vente.</p>
          </article>
          <article>
            <span>Déc. 2023–fév. 2024</span>
            <h3>Jermène</h3>
            <p>Communication, shootings, événementiel et scénographie d’un corner au BHV.</p>
          </article>
          <article>
            <span>Juin–juil. 2024</span>
            <h3>IKKS · Galeries Lafayette</h3>
            <p>Conseil personnalisé, merchandising et gestion des stocks du corner.</p>
          </article>
          <article>
            <span>Sept. 2024–sept. 2025</span>
            <h3>THALES AVS</h3>
            <p>Business development, marketing B2B et coordination de salons internationaux.</p>
          </article>
          <article>
            <span>Sept. 2025–juin 2026</span>
            <h3>HUMANI</h3>
            <p>Association de solidarité internationale de NEOMA BS : création du pôle prospection, management de 9 bénévoles et mission d’un mois à Dakar.</p>
          </article>
          <article>
            <span>Sept. 2025–juin 2026</span>
            <h3>ACCES · Pôle Champagne</h3>
            <p>Fondée il y a plus de 30 ans, ACCES est une association étudiante qui met à l’honneur le champagne, la gastronomie, l’art de vivre et le patrimoine à travers des événements culturels organisés toute l’année. Au sein du pôle Champagne : organisation de visites de caves, conférences et dégustations.</p>
          </article>
          <article>
            <span>Été 2026</span>
            <h3>Golf Club de Toulouse</h3>
            <p>Hospitalité événementielle et service lors de réceptions de 80 à 300 invités.</p>
          </article>
          <article>
            <span>Août–déc. 2026</span>
            <h3>INSPER · São Paulo</h3>
            <p>Échange international en stratégie, marketing et management.</p>
          </article>
          <article>
            <span>Janvier 2027</span>
            <h3>La suite ?</h3>
            <p>Un stage où l’expérience et l’attention portée au client s’accompagnent d’un environnement sain, stimulant et profondément humain.</p>
          </article>
        </div>
      </section>

      <section className="personality" id="personality">
        <div className="transition-orbs" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="section-number">04 — Mon univers</div>
        <div className="personality-intro">
          <p>Ce qui me nourrit</p>
          <h2>La curiosité comme manière d’avancer.</h2>
        </div>
        <div className="personality-grid">
          <article className="personality-card card-equestrian">
            <img src="/images/hobby-equitation.jpg" alt="Eléa pratiquant l’équitation" />
            <div><span>01 · Discipline</span><h3>Équitation</h3><p>Quatorze années de pratique : maîtrise, persévérance et confiance.</p></div>
          </article>
          <article className="personality-card card-yoga">
            <img src="/images/hobby-yoga-bali.png" alt="Eléa et une amie pratiquant le yoga à Bali" />
            <div><span>02 · Équilibre</span><h3>Yoga & mouvement</h3><p>Yoga, Pilates et Qi gong pour cultiver l’ancrage, la mobilité et l’écoute de soi.</p></div>
          </article>
          <article className="personality-card card-wellness">
            <img src="/images/hobby-spa-bali.png" alt="Espace de soins et de massages ouvert sur la nature à Bali" />
            <div><span>03 · Soin</span><h3>Spas & thérapies</h3><p>Massages, drainage lymphatique et médecine traditionnelle chinoise : des rituels qui associent expérience sensorielle et bienfaits thérapeutiques.</p></div>
          </article>
          <article className="personality-card card-travel">
            <img src="/images/hobby-vietnam.png" alt="Eléa découvrant les traditions vietnamiennes" />
            <div><span>04 · Ouverture</span><h3>Voyages & cultures</h3><p>Découvrir d’autres coutumes, écouter et changer de regard.</p></div>
          </article>
          <article className="personality-card card-fitness">
            <img src="/images/hobby-fitness.png" alt="Eléa après un entraînement en studio" />
            <div><span>05 · Énergie</span><h3>Cours collectifs</h3><p>RPM, BodyPump, CAF, CrossFit et BodySculpt : des formats rythmés pour me dépasser et entretenir mon énergie.</p></div>
          </article>
          <article className="personality-card card-champagne">
            <img src="/images/champagne-visit.png" alt="Visite de la Maison Champagne Pierre Mignon avec le pôle Champagne d’ACCES" />
            <div><span>06 · Savoir-faire</span><h3>Culture Champagne</h3><p>J’aime découvrir son patrimoine, ses Maisons et les gestes précis qui façonnent chaque cuvée. Un univers de transmission, d’excellence et de célébration.</p></div>
          </article>
          <article className="personality-card card-sensory">
            <img src="/images/hobby-sensory-dining.png" alt="Assiette créative mêlant textures, couleurs et saveurs" />
            <div><span>07 · Curiosité</span><h3>Expériences sensorielles</h3><p>Découvrir des tables créatives où la cuisine devient un art et où des associations inattendues font voyager le palais.</p></div>
          </article>
        </div>
        <p className="personality-note">Observer · ressentir · partager</p>
      </section>

      <section className="contact" id="contact">
        <p className="section-number">05 — Contact</p>
        <div>
          <p className="contact-kicker">Une idée, une opportunité, un café ?</p>
          <h2>Construisons la suite.</h2>
          <a href="mailto:eabouissou@gmail.com">
            eabouissou@gmail.com <span>↗</span>
          </a>
        </div>
        <div className="contact-sticker">Disponible<br />janvier 2027</div>
      </section>

      <footer>
        <span>Eléa Bouissou © 2026</span>
        <span>Marketing · Événementiel · Expérience client</span>
        <a href="#top">Retour en haut ↑</a>
      </footer>
    </main>
  );
}
