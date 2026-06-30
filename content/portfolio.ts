// Contenido del portafolio de Gerard Alvear.
// Todo el contenido es real (proyectos propios + datos aportados por Gerard).
// Edita libremente: toda la web se alimenta de aquí.

export type ProjectCategory =
  | "Android"
  | "Web/Full-stack"
  | "IA/Agentes"
  | "Infra/DevOps"
  | "Desktop";

export type ProjectStatus = "En desarrollo" | "Activo" | "Completado" | "Prototipo";

// Etiquetas para el filtro de "otros proyectos"
export type ProjectTag =
  | "Sistemas"
  | "IA / Automatización"
  | "Android"
  | "Web"
  | "Redes";

export type Project = {
  slug: string;
  name: string;
  oneLiner: string; // problema/función en una frase clara
  description: string; // descripción larga (no se muestra completa en la card)
  problem?: string; // qué resuelve, ultra breve (cards destacadas)
  result?: string; // resultado o función estrella (cards destacadas)
  stats?: string[]; // métricas cortas para chips (cards destacadas)
  role?: string; // mi papel
  status?: ProjectStatus;
  stack: string[];
  mainTech?: string[]; // 4-5 tecnologías principales para la card
  highlights: string[];
  category: ProjectCategory;
  tags: ProjectTag[];
  featured: boolean;
  repoOrLink?: string; // URL del repo/demo, o undefined si no es público
};

export const identity = {
  name: "Gerard Alvear",
  alias: "Gery",
  // Posicionamiento principal (hero)
  role: "Técnico de sistemas, soporte IT y creador de proyectos",
  shortRole: "Técnico de sistemas · Soporte IT",
  subrole: "Sistemas · Virtualización · Redes · Automatización e IA",
  tagline:
    "Construyo soluciones de sistemas, virtualización, redes y automatización, combinando infraestructura real con desarrollo de software e inteligencia artificial.",
  bio: [
    "Soy Gerard Alvear, técnico en Sistemas Microinformáticos y Redes. Me muevo con soltura entre la infraestructura real —virtualización, redes, servidores Windows y Linux— y el desarrollo, lo que me permite no solo administrar sistemas sino también automatizarlos y construir herramientas a su alrededor.",
    "Aprendo construyendo: cada proyecto propio me sirve para bajar una capa más, desde un hipervisor escrito desde cero hasta un asistente de voz local. Trabajo de forma ordenada, documento lo que hago (con sus bugs y límites) y disfruto resolviendo problemas técnicos de principio a fin.",
  ],
  location: "Ripollet, Barcelona (España)",
  education: "Técnico en Sistemas Microinformáticos y Redes (SMX)",
  nextStep: "Próximo paso: ASIX (Administración de Sistemas Informáticos en Red)",
  available: true,
};

export const metrics: { value: string; label: string }[] = [
  { value: "+15", label: "Proyectos propios" },
  { value: "SMX", label: "Ciclo finalizado" },
  { value: "Inmediata", label: "Disponibilidad" },
  { value: "Barcelona", label: "Ripollet · híbrido" },
];

export const contact = {
  email: "gerard.alpo17@gmail.com",
  github: "https://github.com/Elgeryy1",
  linkedin: "https://www.linkedin.com/in/gerard-alvear-porras-087012369/",
  cvUrl: "/cv-gerard-alvear.pdf", // CV técnico (también existe cv-gerard-alvear-general.pdf)
  location: "Barcelona / híbrido",
  domain: "gerylabs.com",
};

// Tres tarjetas resumen de "Sobre mí"
export const aboutCards: { icon: string; title: string; text: string }[] = [
  {
    icon: "Server",
    title: "Sistemas e infraestructura",
    text: "Virtualización (Hyper-V, QEMU/KVM, libvirt), Windows/Linux Server, Docker, NAS y redes. Monto y administro entornos reales.",
  },
  {
    icon: "Terminal",
    title: "Desarrollo y automatización",
    text: "Apps, backends y scripts (TypeScript, Python, Node.js, C#) y automatización con agentes e IA aplicada sobre la infraestructura.",
  },
  {
    icon: "GraduationCap",
    title: "Aprendizaje continuo",
    text: "He terminado SMX y voy a por ASIX. Construyo proyectos propios para profundizar de verdad en cada capa del sistema.",
  },
];

// ── Experiencia (timeline) ─────────────────────────────────────
export type Experience = {
  org: string;
  role: string;
  kind: string; // "Experiencia" | "Proyecto / Liderazgo"
  period: string;
  location?: string;
  points: string[];
  accent?: boolean; // destaca el nodo en el timeline
};

export const experience: Experience[] = [
  {
    org: "GeoRacing",
    role: "Coordinador técnico / Project Lead",
    kind: "Proyecto / Liderazgo",
    period: "2025",
    location: "MetropolisFPLab · Circuit de Barcelona-Catalunya",
    points: [
      "Liderazgo del equipo técnico y coordinación de las distintas partes del proyecto.",
      "Desarrollo de un sistema offline en tiempo real para señalización de evento.",
      "Planificación, reparto de tareas y resolución de problemas sobre la marcha.",
    ],
    accent: true,
  },
  {
    org: "Effytec",
    role: "Técnico de soporte informático (prácticas)",
    kind: "Experiencia",
    period: "Mayo 2025 – Diciembre 2025",
    location: "Prácticas de empresa (FP)",
    points: [
      "Soporte a usuarios: incidencias de hardware y software del día a día.",
      "Gestión de periféricos y conectividad.",
      "Elaboración de documentación y seguimiento de protocolos internos.",
    ],
  },
];

// ── Tecnologías por categoría ──────────────────────────────────
export type SkillGroup = {
  key: string;
  label: string;
  icon: string; // nombre de icono lucide
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    key: "so",
    label: "Sistemas operativos",
    icon: "Monitor",
    items: ["Windows 10/11", "Windows Server", "Linux", "Ubuntu", "Debian"],
  },
  {
    key: "virt",
    label: "Virtualización",
    icon: "Boxes",
    items: ["Hyper-V", "QEMU / KVM", "libvirt", "VirtualBox", "WHPX", "SPICE / VNC / RDP"],
  },
  {
    key: "redes",
    label: "Redes",
    icon: "Network",
    items: ["TCP/IP", "DNS / DHCP", "VLAN / Routing", "VPN", "Firewall", "mDNS", "Cloudflare"],
  },
  {
    key: "infra",
    label: "Infraestructura",
    icon: "Server",
    items: ["Docker", "Docker Compose", "NAS / self-hosting", "GitHub Actions (CI)", "Nginx / proxy"],
  },
  {
    key: "dev",
    label: "Desarrollo",
    icon: "Code2",
    items: ["TypeScript", "Python", "Node.js", "C# / .NET", "Kotlin", "React / Next.js", "SQL"],
  },
  {
    key: "ia",
    label: "Automatización e IA",
    icon: "Bot",
    items: ["Bash / PowerShell", "RAG", "LLMs (Claude / OpenAI / Ollama)", "MCP", "Whisper (STT)"],
  },
  {
    key: "tools",
    label: "Herramientas",
    icon: "Wrench",
    items: ["Git / GitHub", "VS Code", "Obsidian", "Postman", "Linux CLI"],
  },
];

// Stack clave para el marquee del hero / sección tecnologías
export const priorityStack: string[] = [
  "Windows Server",
  "Linux",
  "Ubuntu",
  "Hyper-V",
  "QEMU / KVM",
  "Docker",
  "Redes",
  "Python",
  "TypeScript",
  "Node.js",
  "Git",
  "Cloudflare",
];

// ── Proyectos ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "hypergery",
    name: "HyperGery",
    oneLiner: "Plataforma de virtualización con hipervisor propio en C# que arranca Ubuntu sin QEMU.",
    problem: "Orquestar una flota de VMs multi-host desde escritorio y móvil, sin depender de hipervisores de terceros.",
    result: "HG-VMM: un hipervisor escrito desde cero sobre Windows Hypervisor Platform que arranca Ubuntu con GNOME acelerado por GPU y 284 tests verdes.",
    stats: ["284 tests C#", "~31.000 LOC C#", "13 hitos N1–N13", "4 vCPUs / 16 GiB"],
    role: "Arquitecto y desarrollador único: hipervisor, Hub, agentes y apps",
    status: "En desarrollo",
    description:
      "Ecosistema completo de virtualización: app de escritorio (Avalonia/C#), un Hub central que orquesta una flota de equipos vía agentes, y apps móviles de control remoto. Su pieza estrella es HG-VMM, un hipervisor propio escrito desde cero sobre la Windows Hypervisor Platform.",
    stack: ["C# / .NET 8", "WHPX", "Avalonia", "Rust", "Python", "Docker", "Kotlin / Compose"],
    mainTech: ["C# / .NET 8", "WHPX", "Avalonia", "Rust", "Python / Docker", "Kotlin"],
    highlights: [
      "Hipervisor HG-VMM desde cero sobre WHP (sin QEMU): arranca Ubuntu con GNOME acelerado por GPU.",
      "Aceleración 3D real: virtio-gpu → virglrenderer → ANGLE → D3D11 sobre una RTX 2070.",
      "Segundo motor en Rust: clon clean-room de VirtualBox (discos VDI/VHD, .vbox, CLI tipo VBoxManage).",
      "Motor con SMP de 4 núcleos, 16 GiB RAM, NAT slirp propio (DNS/UDP/TCP), audio HDA y ratón absoluto.",
      "Hub en Python/Docker coordina la flota por REST+SQLite con Bearer, heartbeat y allowlist de comandos.",
    ],
    category: "Infra/DevOps",
    tags: ["Sistemas", "Web"],
    featured: true,
    repoOrLink: "https://github.com/Elgeryy1/hypergery",
  },
  {
    slug: "georacing",
    name: "GeoRacing",
    oneLiner: "Señalización digital en tiempo real para circuitos de motorsport (balizas BLE + apps + API).",
    problem: "Comunicar info crítica (banderas, safety car, evacuación) y guiar a miles de asistentes en directo.",
    result: "Evacuación coordinada: el operador la activa desde el panel y cada baliza cambia a modo evacuación con flechas en ~300 ms.",
    stats: ["5 componentes nativos", "212 tests en CI", "polling ~300 ms", "BLE · 9 bytes"],
    role: "Coordinador técnico / Project Lead",
    status: "Activo",
    description:
      "Sistema distribuido geolocalizado para grandes eventos de motor: una red de balizas físicas (mini-PC Windows que emiten su zona por BLE) coordinada con apps móviles nativas y un panel web de control. Cinco componentes nativos en un monorepo con CI.",
    stack: ["Kotlin / Compose", "Swift / SwiftUI", "TypeScript / React", "Node.js / Express", "C# / WPF", "MySQL", "BLE"],
    mainTech: ["Kotlin", "Swift", "React", "C# / .NET 8", "Node.js", "BLE"],
    highlights: [
      "Sistema distribuido de 5 componentes nativos: Android, iOS, panel web, baliza Windows y API REST.",
      "Evacuación en ~300 ms: las balizas hacen polling y conmutan a modo evacuación con flechas direccionales.",
      "Protocolo BLE propio: payload de 9 bytes (zona, modo, TTL, temp) que las apps escanean para detectar zona.",
      "212 tests automatizados en CI (47 Vitest + 116 JUnit + 49 node:test) en GitHub Actions por cada push.",
      "Auditoría de seguridad: cerrada una vía de SQL injection con allow-list de tablas y columnas.",
    ],
    category: "Web/Full-stack",
    tags: ["Web", "Android", "Redes"],
    featured: true,
    repoOrLink: "https://github.com/Elgeryy1/georacing",
  },
  {
    slug: "hyperdesk-copiaisard",
    name: "HyperDesk",
    oneLiner: "Plataforma web de virtualización tipo cloud-lab académico sobre KVM/libvirt real.",
    problem: "Que los profesores desplieguen y evalúen prácticas con VMs a los alumnos, sin montar la infra por aula.",
    result: "Aula virtual completa: 20 módulos de API, 30 modelos Prisma y un provider libvirt real (1.732 LOC sobre virsh) intercambiable con mock.",
    stats: ["20 módulos API", "30 modelos Prisma", "56 tests", "RBAC · 3 roles"],
    role: "Desarrollador full-stack y arquitecto único",
    status: "En desarrollo",
    description:
      "Panel web estilo cloud para gestionar máquinas virtuales en un entorno educativo: login JWT, RBAC (admin/profesor/alumno), ciclo de vida de VMs, plantillas y 'lab blueprints' para desplegar prácticas, con consola remota multiprotocolo.",
    stack: ["Next.js 15", "TypeScript", "Express", "PostgreSQL", "Prisma", "Turborepo", "Docker", "libvirt", "WinUI 3"],
    mainTech: ["Next.js 15", "PostgreSQL / Prisma", "libvirt (virsh)", "WinUI 3", "Docker"],
    highlights: [
      "Provider libvirt real (1.732 LOC sobre virsh) y mock, intercambiables tras un contrato hexagonal.",
      "Consola remota triple: SPICE web (spice-html5), RDP con túnel automático y Serial por WebSocket.",
      "Asistente IA local con Ollama (818 LOC) que provisiona VMs y labs en lenguaje natural.",
      "Lab blueprints con evaluación en tiempo real por WebSocket, scoring ponderado y export CSV.",
      "Monorepo Turborepo: API Express, web Next.js 15 y cliente desktop WinUI 3 (.NET 8).",
    ],
    category: "Web/Full-stack",
    tags: ["Sistemas", "Web", "Redes"],
    featured: true,
    repoOrLink: "https://github.com/Elgeryy1/HyperDesktop",
  },
  {
    slug: "nodepilot",
    name: "NodePilot",
    oneLiner: "Control total de un PC Windows desde Android por LAN, sin nube ni cuenta.",
    problem: "Manejar el PC (audio, energía, ratón/teclado, pantalla, archivos) desde el móvil sin exponerlo a internet.",
    result: "Stack de 3 componentes con ~45 rutas REST/WSS, telemetría CPU/GPU cada 2 s y desbloqueo del PC desde el móvil vía Credential Provider nativo.",
    stats: ["~45 rutas REST/WSS", "25 tests", "3 componentes nativos", "telemetría cada 2 s"],
    role: "Autor único: protocolo, agente WinUI 3, app Android y Credential Provider C++",
    status: "En desarrollo",
    description:
      "Sistema cliente-servidor LAN-only para controlar un PC Windows desde Android: telemetría de CPU/RAM/GPU/red, control de volumen por aplicación, ratón/teclado, archivos y acciones de sistema. Cliente Android en Kotlin y agente Windows en WinUI 3 / .NET 8.",
    stack: ["Kotlin / Compose", "WinUI 3 / .NET 8", "C++ (Credential Provider)", "TLS + AES-256-GCM", "mDNS", "WebSockets"],
    mainTech: [".NET 8 / WinUI 3", "Kotlin / Compose", "C++ (Credential Provider)", "TLS + AES-256-GCM", "mDNS"],
    highlights: [
      "TLS auto-firmado RSA-2048 con pinning TOFU (SHA-256) por host; el server solo guarda el hash del token.",
      "Token cifrado AES-256-GCM en Android Keystore + pairing de 6 dígitos con diálogo 'Allow' en el PC.",
      "Credential Provider en C++ (LogonUI): desbloquea el PC desde el móvil vía un servicio en sesión 0.",
      "Anti-replay en acciones críticas: dedup de requestId, ventana de timestamp ±120 s y confirmación explícita.",
      "~45 rutas REST/WSS: ratón/teclado, captura JPEG, archivos, portapapeles, brillo y audio por aplicación.",
    ],
    category: "Infra/DevOps",
    tags: ["Sistemas", "Redes", "Android"],
    featured: true,
    repoOrLink: undefined,
  },
  {
    slug: "gery-assistant",
    name: "Gery Assistant",
    oneLiner: "Asistente de voz 100% local para Windows con wake word 'Hey Gery' y servidor MCP.",
    problem: "Controlar Windows, audio y Spotify por voz sin enviar el micrófono a la nube, con herramientas verificables.",
    result: "Un servidor MCP expone 31 herramientas reales (apps, volumen por app, Spotify, estado del PC) reutilizadas por voz, UI y MCP desde un único registro.",
    stats: ["31 herramientas MCP", "16 proyectos .NET", "23 tests", "100% local"],
    role: "Desarrollador full-stack .NET: voz, MCP, Spotify, seguridad y empaquetado",
    status: "Prototipo",
    description:
      "Asistente de escritorio 100% local para Windows 11 (.NET 8 / Avalonia) que escucha 'Hey Gery', transcribe con Whisper y ejecuta acciones verificadas (apps, volumen por app, Spotify). Expone y consume herramientas vía un servidor MCP propio.",
    stack: ["C# / .NET 8", "Avalonia", "NAudio", "sherpa-onnx", "Silero VAD", "Whisper", "MCP", "Inno Setup"],
    mainTech: ["C# / .NET 8", "Avalonia", "sherpa-onnx (Whisper/VAD)", "MCP", "Spotify (OAuth PKCE)", "SQLite"],
    highlights: [
      "Pipeline de voz local: NAudio → sherpa-onnx (KWS) → Silero VAD → Whisper → router → TTS de Windows.",
      "Servidor MCP oficial con 31 herramientas; el mismo registro y permisos sirve a voz, UI y MCP.",
      "Spotify con OAuth PKCE (S256) y tokens cifrados por usuario vía Windows DPAPI.",
      "Router determinista resuelve planes como 'abre Spotify y ponlo al 40 %' sin tocar la nube.",
      "Solución de 16 proyectos (.NET) con instalador Inno Setup self-contained (win-x64).",
    ],
    category: "IA/Agentes",
    tags: ["IA / Automatización", "Sistemas"],
    featured: true,
    repoOrLink: undefined,
  },
  {
    slug: "forzadrive",
    name: "ForzaDrive",
    oneLiner: "Navegador GPS turn-by-turn nativo para Forza Horizon con Android Auto.",
    description:
      "App Android que escucha la telemetría UDP de Forza Horizon, sitúa el coche en un mapa del juego, calcula rutas con Dijkstra y da indicaciones por voz, también en la pantalla del coche vía Android Auto nativo.",
    stack: ["Kotlin", "Jetpack Compose", "Android for Cars", "Room (KSP)", "Retrofit / OkHttp", "TextToSpeech"],
    mainTech: ["Kotlin", "Compose", "Android Auto"],
    highlights: [
      "Parser binario de los paquetes 'Car Dash' de 324 bytes.",
      "Pathfinding Dijkstra con costes por superficie y tres modos de routing.",
      "Android Auto real: mapa + ruta dibujados con Canvas nativo sobre la Surface.",
    ],
    category: "Android",
    tags: ["Android"],
    featured: false,
    repoOrLink: "https://github.com/Elgeryy1/forza-drive",
  },
  {
    slug: "ainas",
    name: "AINAS",
    oneLiner: "Asistente IA para tu NAS: busca, resume y chatea con tus archivos (RAG).",
    description:
      "Servicio que indexa carpetas locales o de un NAS y permite buscar, resumir y conversar con los archivos mediante RAG, sin GPU. Capa LLM intercambiable (Claude, OpenAI, Ollama) y búsqueda full-text con SQLite FTS5.",
    stack: ["Python 3.11+", "FastAPI", "SQLite FTS5", "pypdf", "Docker", "Ollama / Claude / OpenAI"],
    mainTech: ["Python", "FastAPI", "RAG", "Docker"],
    highlights: [
      "Capa LLM con patrón provider/factory: cambias de proveedor sin tocar el resto.",
      "Búsqueda full-text con FTS5 standalone y RAG.",
      "Dockerizado, pensado para correr en un NAS sin GPU.",
    ],
    category: "IA/Agentes",
    tags: ["IA / Automatización"],
    featured: false,
    repoOrLink: undefined,
  },
  {
    slug: "djicinemamvp",
    name: "DJICinemaMVP",
    oneLiner: "Convierte un Galaxy en cámara de cine controlada por un gimbal DJI vía BLE.",
    description:
      "App Android que transforma un Samsung Galaxy en una cámara de cine controlada por un gimbal DJI OM2/OM5 por Bluetooth LE, con preview y grabación high-speed manejadas desde el gimbal.",
    stack: ["Kotlin", "Jetpack Compose", "Camera2 / CameraX", "DJI Mobile SDK 4.18", "BLE"],
    mainTech: ["Kotlin", "Camera2", "DJI SDK", "BLE"],
    highlights: [
      "Pipeline de cámara híbrida CameraX/Camera2 (hasta 120 fps).",
      "Integración DJI desacoplada mediante Java Reflection.",
      "Detección de capacidades en caliente (resoluciones, fps, codecs).",
    ],
    category: "Android",
    tags: ["Android"],
    featured: false,
    repoOrLink: "https://github.com/Elgeryy1/dji-cinema-mvp",
  },
  {
    slug: "elgatorecorder",
    name: "ElgatoRecorder",
    oneLiner: "Graba vídeo desde una capturadora Elgato HD60 X por USB/UVC en Android.",
    description:
      "App Android que graba vídeo desde una capturadora Elgato HD60 X por USB/UVC sin pasar por el Camera HAL, con su propia pipeline de codificación para sortear el scoped storage.",
    stack: ["Kotlin", "Jetpack Compose", "AUSBC (UVC)", "MediaCodec H.264", "MediaMuxer"],
    mainTech: ["Kotlin", "UVC", "MediaCodec"],
    highlights: [
      "Pipeline NV21 → NV12 → MediaCodec H.264 → MediaMuxer directo a MediaStore.",
      "Parser de descriptores USB raw para resoluciones y fps reales.",
      "Detección por vendor ID Elgato/Corsair y flujo de permisos USB.",
    ],
    category: "Android",
    tags: ["Android"],
    featured: false,
    repoOrLink: "https://github.com/Elgeryy1/elgato-recorder",
  },
  {
    slug: "ultrabot",
    name: "Superbot",
    oneLiner: "Bot modular de Telegram: bot, API, Mini App y worker en un monorepo.",
    description:
      "Monorepo pnpm para un bot de Telegram modular: bot webhook, API interna, Mini App web y worker asíncrono, con un sistema de módulos con manifiesto, permisos y dependencias.",
    stack: ["TypeScript", "NestJS / Fastify", "Next.js", "BullMQ", "Prisma", "pnpm / Turborepo", "Docker"],
    mainTech: ["TypeScript", "NestJS", "BullMQ", "Docker"],
    highlights: [
      "Arquitectura de módulos con manifiesto, permisos y dependencias.",
      "Apps separadas (bot, api, web, worker) y packages compartidos.",
      "Tooling de monorepo robusto (pnpm, Biome, Vitest, Docker).",
    ],
    category: "Web/Full-stack",
    tags: ["Web", "IA / Automatización"],
    featured: false,
    repoOrLink: undefined,
  },
  {
    slug: "memora",
    name: "Memora",
    oneLiner: "Gestor self-hosted de fotos y vídeos (fork independiente de Immich).",
    description:
      "Producto self-hosted de fotos, vídeos y recuerdos, planteado como un fork independiente de Immich con su propio rebranding y estrategia de sync con upstream. Incluye servidor, app móvil, ML e infraestructura.",
    stack: ["TypeScript", "NestJS", "Flutter", "PostgreSQL", "Python (ML)", "Docker"],
    mainTech: ["TypeScript", "NestJS", "PostgreSQL", "Docker"],
    highlights: [
      "Fork de gran escala con auditoría de rebranding y sync con upstream.",
      "Manejo correcto de licencias AGPL-3.0 (atribución preservada).",
      "Stack completo self-hosted: servidor, móvil, ML y despliegue.",
    ],
    category: "Web/Full-stack",
    tags: ["Web", "Sistemas"],
    featured: false,
    repoOrLink: undefined,
  },
  {
    slug: "hyperlan",
    name: "HyperLAN",
    oneLiner: "Centro de control de red local: agentes por nodo + servidor + dashboard.",
    description:
      "Panel de infraestructura self-hosted: un agente ligero en cada máquina reporta su salud; un servidor central agrega el estado, lanza alertas por umbrales y ejecuta comandos pre-aprobados, todo en un dashboard web.",
    stack: ["Python 3.10+", "FastAPI", "psutil", "httpx", "JavaScript"],
    mainTech: ["Python", "FastAPI", "psutil"],
    highlights: [
      "Arquitectura agente/servidor con autenticación por token.",
      "Ejecución segura por allow-list (nunca shell arbitrario).",
      "Motor de alertas por umbrales con detección de nodos offline.",
    ],
    category: "Infra/DevOps",
    tags: ["Sistemas", "Redes"],
    featured: false,
    repoOrLink: undefined,
  },
  {
    slug: "friendvault",
    name: "FriendVault",
    oneLiner: "Archivo emocional self-hosted de personas, amistades y recuerdos.",
    description:
      "Un 'Immich para relaciones humanas': archivo self-hosted de personas, amistades y recuerdos con línea temporal emocional. Backend Node/TypeScript con Express y Prisma sobre PostgreSQL, frontend React/Vite.",
    stack: ["Node.js / TypeScript", "Express", "Prisma", "PostgreSQL 16", "React / Vite", "Docker"],
    mainTech: ["TypeScript", "Express", "Prisma", "Docker"],
    highlights: [
      "Esquema Prisma Person/Friendship/Memory con assets en disco.",
      "Due-diligence legal real (derivación de Immich, AGPL).",
      "Arquitectura de 3 servicios con Docker Compose.",
    ],
    category: "Web/Full-stack",
    tags: ["Web"],
    featured: false,
    repoOrLink: undefined,
  },
  {
    slug: "georacing-mini-api",
    name: "GeoRacing Mini API",
    oneLiner: "API REST mock zero-dependency para testear las apps de GeoRacing en local.",
    description:
      "API REST en memoria sin dependencias (solo el módulo http de Node) para probar localmente las apps de baliza y móvil de GeoRacing: balizas, POIs, estado de circuito, incidencias y cola de comandos.",
    stack: ["Node.js (http nativo)"],
    mainTech: ["Node.js"],
    highlights: [
      "Contrato REST de dominio + 'smart schema' genérico.",
      "Cola de comandos que las balizas pollean.",
      "Zero-dependency y portable.",
    ],
    category: "Web/Full-stack",
    tags: ["Web"],
    featured: false,
    repoOrLink: undefined,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

// Filtros disponibles para "otros proyectos" (derivados de los tags reales)
export const projectFilters: ProjectTag[] = Array.from(
  new Set(otherProjects.flatMap((p) => p.tags))
) as ProjectTag[];
