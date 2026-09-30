const translations = {
  ca: {
    nav: { temari: "Temari", sessions: "Sessions", avaluacio: "Avaluació", enllacos: "Enllaços d'utilitat", search: "Cercar (ex: matrius, P90615)...", searchMobile: "Cercar...", logout: "Tancar sessió", logins: "Àrea del professor" },
    login: { title: "Inici de sessió", subtitle: "Accés al portal PRO1 G40 - Aula Lliure", nameLabel: "Nom i cognoms", namePlaceholder: "Ex: Martina Puig Roca", next: "Continuar", errorName: "Escriu el teu nom i cognoms complets (mínim dues paraules).", passTitle: "Contrasenya", registerTitle: "Registre", passHintLogin: "Benvingut/da de nou! Introdueix la contrasenya per entrar.", passHintRegister: "Encara no estàs registrat. Introdueix la contrasenya per crear el teu registre.", passLabel: "Contrasenya", passPlaceholder: "Contrasenya comuna", enter: "Entrar", errorPass: "Contrasenya incorrecta.", pinTitle: "PIN", pinHint: "Accés del professor. Introdueix el PIN.", pinLabel: "PIN", pinPlaceholder: "••••", errorPin: "PIN incorrecte.", footer: "Recurs acadèmic complementari · No oficial de la UPC", errorDenied: "No tens permís per iniciar sessió. Parla amb el professor." },
    logins: { title: "Àrea del professor", subtitle: "Control d'accés i historial d'inicis de sessió.", name: "Nom", type: "Tipus", datetime: "Data i hora", entries: "entrades", clear: "Esborrar historial", empty: "Encara no hi ha cap inici de sessió registrat.", note: "Llistes i historial es desen en aquest navegador.", typeRegister: "Registre", typeLogin: "Inici de sessió", professorBadge: "Professor", clearConfirm: "Vols esborrar tot l'historial d'inicis de sessió?", historyTitle: "Inicis de sessió" },
    access: { title: "Qui pot accedir", subtitle: "Noms que poden iniciar sessió al portal.", modeOpen: "Obert", modeRestricted: "Restringit", openNote: "Accés obert: qualsevol nom pot iniciar sessió.", restrictedNote: "Accés restringit: només els noms de la llista poden iniciar sessió. La resta seran rebutjats.", addPlaceholder: "Ex: Martina Puig Roca", add: "Afegir", errorName: "Escriu el nom complet (mínim dues paraules).", exists: "Aquest nom ja és a la llista.", empty: "La llista està buida. Afegeix els noms de la classe.", entries: "persones amb accés", remove: "Treure de la llista", added: "afegit el" },
    denied: { title: "Intentis rebutjats", subtitle: "Usuaris que han intentat entrar sense permís.", name: "Nom", attempts: "Intents", last: "Últim intent", allow: "Permetre", entries: "persones", empty: "Cap intent rebutjat.", clear: "Esborrar llista", clearConfirm: "Vols esborrar la llista d'intents rebutjats?" },
    hero: { badge: "Divendres de 12:00 - 14:00", title1: "Apunts i consells per", title2: "Tot el que necessites per preparar l'assignatura de Programació 1 (FIB-UPC):", subtitle: "resums teòrics, errors típics i una calculadora de notes interactiva." },
    countdown: { parcial: "Examen Parcial", final: "Examen Final", dies: "dies restants" },
    temari: { title: "Temari de", subtitle: "11 temes amb apunts i errors típics.", cta: "📚 Explorar el Temari" },
    cta: { title: "Preparat per practicar?", subtitle: "Prova els problemes de Jutge.org per consolidar els teus coneixements.", cta: "🎯 Jutge.org ↗" },
    footer: { info: "Informació", infoText: "Aquest portal és un recurs complementari no oficial. El contingut es basa en el temari oficial de PRO1.", credits: "Fet per Cesc Feliu — Recurs no oficial de la UPC" },
    sessions: { title: "Sessions", subtitle: "Divendres 12:00 - 14:00 - Aula B5S202.", planificacio: "Planificació a confirmar", planPending: "Aquesta sessió encara no s'ha publicat. Consulta-la més endavant.", sessio: "Sessió" },
    avaluacio: { title: "Avaluació", subtitle: "Fórmula oficial i calculadora de notes de PRO1.", formula: "Fórmula d'avaluació", notaP: "nota de l'examen parcial (sobre 10)", notaF: "nota de l'examen final (sobre 10)", notaN: "nota global de l'assignatura", npTitle: "Nota NP:", npText: "Un examen tindrà nota NP si no s'ha fet cap entrega a cap dels seus problemes. La nota global N serà NP si ambdós exàmens (parcial i final) tenen nota NP." },
    calculator: { title: "Calculadora de Notes", formula: "Fórmula:", parcial: "Examen Parcial (P)", final: "Examen Final (F)", mitjana: "Mitjana ponderada", notaGlobal: "Nota Global (N)", quantFinal: "📊 Quant necessito al Final?", per5: "Per a un 5.0 (Aprovat)", per7: "Per a un 7.0 (Notable)", impossible: "⚠️ No és possible assolir aquesta nota amb els valors actuals de P." },
    calculatorStatus: { excelent: "🎉 Excel·lent! Has aprovat amb nota.", be: "✅ Bé! Has aprovat.", justet: "⚠️ Justet! Has aprovat però és millor millorar.", suspes: "❌ Suspès. Necessites més nota." },
    enllacos: { title: "Enllaços d'utilitat", subtitle: "Recursos útils per a l'assignatura de Programació 1.", webOficial: "Web oficial PRO1", webOficialDesc: "Pàgina oficial de l'assignatura de Programació 1 de la FIB-UPC.", guiaDocent: "Guia docent", guiaDocentDesc: "Informació oficial de l'assignatura: horaris, evaluació i bibliografia.", jutge: "Jutge.org", jutgeDesc: "Jutge automatitzat de problemes de programació de la UPC.", llicons: "Lliçons de C++", lliconsDesc: "Lliçons interactives de C++ de Jutge.org per practicar.", minidosis: "Minidosis", minidosisDesc: "Col·lecció de vídeos construïts pel professor Pau Fernández. Complement útil, els temes 1 a 13 corresponen aproximadament a PRO1." },
    lang: { ca: "Català", es: "Castellà", en: "Anglès" }
  },
  es: {
    nav: { temari: "Temario", sessions: "Sesiones", avaluacio: "Evaluación", enllacos: "Enlaces de utilidad", search: "Buscar (ej: matrius, P90615)...", searchMobile: "Buscar...", logout: "Cerrar sesión", logins: "Área del profesor" },
    login: { title: "Inicio de sesión", subtitle: "Acceso al portal PRO1 G40 - Aula Lliure", nameLabel: "Nombre y apellidos", namePlaceholder: "Ej: Martina Puig Roca", next: "Continuar", errorName: "Escribe tu nombre y apellidos completos (mínimo dos palabras).", passTitle: "Contraseña", registerTitle: "Registro", passHintLogin: "¡Bienvenido/a de nuevo! Introduce la contraseña para entrar.", passHintRegister: "Aún no estás registrado. Introduce la contraseña para crear tu registro.", passLabel: "Contraseña", passPlaceholder: "Contraseña común", enter: "Entrar", errorPass: "Contraseña incorrecta.", pinTitle: "PIN", pinHint: "Acceso del profesor. Introduce el PIN.", pinLabel: "PIN", pinPlaceholder: "••••", errorPin: "PIN incorrecto.", footer: "Recurso académico complementario · No oficial de la UPC", errorDenied: "No tienes permiso para iniciar sesión. Habla con el profesor." },
    logins: { title: "Área del profesor", subtitle: "Control de acceso e historial de inicios de sesión.", name: "Nombre", type: "Tipo", datetime: "Fecha y hora", entries: "entradas", clear: "Borrar historial", empty: "Aún no hay ningún inicio de sesión registrado.", note: "Las listas y el historial se guardan en este navegador.", typeRegister: "Registro", typeLogin: "Inicio de sesión", professorBadge: "Profesor", clearConfirm: "¿Quieres borrar todo el historial de inicios de sesión?", historyTitle: "Inicios de sesión" },
    access: { title: "Quién puede acceder", subtitle: "Nombres que pueden iniciar sesión en el portal.", modeOpen: "Abierto", modeRestricted: "Restringido", openNote: "Acceso abierto: cualquier nombre puede iniciar sesión.", restrictedNote: "Acceso restringido: solo los nombres de la lista pueden iniciar sesión. El resto será rechazado.", addPlaceholder: "Ej: Martina Puig Roca", add: "Añadir", errorName: "Escribe el nombre completo (mínimo dos palabras).", exists: "Ese nombre ya está en la lista.", empty: "La lista está vacía. Añade los nombres de la clase.", entries: "personas con acceso", remove: "Quitar de la lista", added: "añadido el" },
    denied: { title: "Intentos rechazados", subtitle: "Usuarios que han intentado entrar sin permiso.", name: "Nombre", attempts: "Intentos", last: "Último intento", allow: "Permitir", entries: "personas", empty: "Ningún intento rechazado.", clear: "Borrar lista", clearConfirm: "¿Quieres borrar la lista de intentos rechazados?" },
    hero: { badge: "Viernes de 12:00 - 14:00", title1: "Apuntes y consejos para", title2: "Todo lo que necesitas para preparar la asignatura de Programación 1 (FIB-UPC):", subtitle: "resúmenes teóricos, errores típicos y una calculadora de notas interactiva." },
    countdown: { parcial: "Examen Parcial", final: "Examen Final", dies: "días restantes" },
    temari: { title: "Temario de", subtitle: "11 temas con apuntes y errores típicos.", cta: "📚 Explorar el Temario" },
    cta: { title: "¿Preparado para practicar?", subtitle: "Prueba los problemas de Jutge.org para consolidar tus conocimientos.", cta: "🎯 Jutge.org ↗" },
    footer: { info: "Información", infoText: "Este portal es un recurso complementario no oficial. El contenido se basa en el temario oficial de PRO1.", credits: "Hecho por Cesc Feliu — Recurso no oficial de la UPC" },
    sessions: { title: "Sesiones", subtitle: "Viernes 12:00 - 14:00 - Aula B5S202.", planificacio: "Planificación a confirmar", planPending: "Esta sesión aún no se ha publicado. Consúltala más adelante.", sessio: "Sesión" },
    avaluacio: { title: "Evaluación", subtitle: "Fórmula oficial y calculadora de notas de PRO1.", formula: "Fórmula de evaluación", notaP: "nota del examen parcial (sobre 10)", notaF: "nota del examen final (sobre 10)", notaN: "nota global de la asignatura", npTitle: "Nota NP:", npText: "Un examen tendrá nota NP si no se ha realizado ninguna entrega en ninguno de sus problemas. La nota global N será NP si ambos exámenes (parcial y final) tienen nota NP." },
    calculator: { title: "Calculadora de Notas", formula: "Fórmula:", parcial: "Examen Parcial (P)", final: "Examen Final (F)", mitjana: "Media ponderada", notaGlobal: "Nota Global (N)", quantFinal: "📊 ¿Cuánto necesito en el Final?", per5: "Para un 5.0 (Aprobado)", per7: "Para un 7.0 (Notable)", impossible: "⚠️ No es posible alcanzar esta nota con los valores actuales de P." },
    calculatorStatus: { excelent: "🎉 ¡Excelente! Has aprobado con nota.", be: "✅ ¡Bien! Has aprobado.", justet: "⚠️ ¡Justito! Has aprobado pero es mejor mejorar.", suspes: "❌ Suspenso. Necesitas más nota." },
    enllacos: { title: "Enlaces de utilidad", subtitle: "Recursos útiles para la asignatura de Programación 1.", webOficial: "Web oficial PRO1", webOficialDesc: "Página oficial de la asignatura de Programación 1 de la FIB-UPC.", guiaDocent: "Guía docente", guiaDocentDesc: "Información oficial de la asignatura: horarios, evaluación y bibliografía.", jutge: "Jutge.org", jutgeDesc: "Juez automatizado de problemas de programación de la UPC.", llicons: "Lecciones de C++", lliconsDesc: "Lecciones interactivas de C++ de Jutge.org para practicar.", minidosis: "Minidosis", minidosisDesc: "Colección de vídeos construidos por el profesor Pau Fernández. Complemento útil, los temas 1 a 13 corresponden aproximadamente a PRO1." },
    lang: { ca: "Catalán", es: "Castellano", en: "Inglés" }
  },
  en: {
    nav: { temari: "Syllabus", sessions: "Sessions", avaluacio: "Assessment", enllacos: "Useful Links", search: "Search (ex: matrius, P90615)...", searchMobile: "Search...", logout: "Sign out", logins: "Teacher area" },
    login: { title: "Sign in", subtitle: "Access to the PRO1 G40 - Aula Lliure portal", nameLabel: "Full name", namePlaceholder: "e.g. Martina Puig Roca", next: "Continue", errorName: "Write your full name (at least two words).", passTitle: "Password", registerTitle: "Registration", passHintLogin: "Welcome back! Enter your password to sign in.", passHintRegister: "You are not registered yet. Enter your password to create your registration.", passLabel: "Password", passPlaceholder: "Common password", enter: "Enter", errorPass: "Incorrect password.", pinTitle: "PIN", pinHint: "Teacher access. Enter the PIN.", pinLabel: "PIN", pinPlaceholder: "••••", errorPin: "Incorrect PIN.", footer: "Complementary academic resource · Unofficial UPC resource", errorDenied: "You are not allowed to sign in. Talk to the teacher." },
    logins: { title: "Teacher area", subtitle: "Access control and sign-in history.", name: "Name", type: "Type", datetime: "Date and time", entries: "entries", clear: "Clear history", empty: "No sign-ins recorded yet.", note: "Lists and history are stored in this browser.", typeRegister: "Registration", typeLogin: "Sign in", professorBadge: "Teacher", clearConfirm: "Do you want to clear the whole sign-in history?", historyTitle: "Sign-ins" },
    access: { title: "Who can access", subtitle: "Names that can sign in to the portal.", modeOpen: "Open", modeRestricted: "Restricted", openNote: "Open access: any name can sign in.", restrictedNote: "Restricted access: only names on the list can sign in. The rest will be rejected.", addPlaceholder: "e.g. Martina Puig Roca", add: "Add", errorName: "Write the full name (at least two words).", exists: "That name is already on the list.", empty: "The list is empty. Add the class names.", entries: "people with access", remove: "Remove from list", added: "added on" },
    denied: { title: "Rejected attempts", subtitle: "Users who tried to sign in without permission.", name: "Name", attempts: "Attempts", last: "Last attempt", allow: "Allow", entries: "people", empty: "No rejected attempts.", clear: "Clear list", clearConfirm: "Do you want to clear the list of rejected attempts?" },
    hero: { badge: "Fridays 12:00 - 14:00", title1: "Notes and tips for", title2: "Everything you need to prepare for Programming 1 (FIB-UPC):", subtitle: "theoretical summaries, common mistakes, and an interactive grade calculator." },
    countdown: { parcial: "Midterm Exam", final: "Final Exam", dies: "days remaining" },
    temari: { title: "Syllabus", subtitle: "11 topics with notes and common mistakes.", cta: "📚 Explore Syllabus" },
    cta: { title: "Ready to practice?", subtitle: "Try Jutge.org problems to consolidate your knowledge.", cta: "🎯 Jutge.org ↗" },
    footer: { info: "Information", infoText: "This portal is an unofficial complementary resource. The content is based on the official PRO1 syllabus.", credits: "Made by Cesc Feliu — Unofficial UPC resource" },
    sessions: { title: "Sessions", subtitle: "Fridays 12:00 - 14:00 - Aula B5S202.", planificacio: "Schedule to be confirmed", planPending: "This session has not been published yet. Check back later.", sessio: "Session" },
    avaluacio: { title: "Assessment", subtitle: "Official formula and grade calculator for PRO1.", formula: "Assessment formula", notaP: "midterm exam grade (out of 10)", notaF: "final exam grade (out of 10)", notaN: "overall course grade", npTitle: "NP grade:", npText: "An exam will receive an NP grade if no submissions have been made for any of its problems. The overall grade N will be NP if both exams (midterm and final) have an NP grade." },
    calculator: { title: "Grade Calculator", formula: "Formula:", parcial: "Midterm Exam (P)", final: "Final Exam (F)", mitjana: "Weighted average", notaGlobal: "Overall Grade (N)", quantFinal: "📊 What do I need on the Final?", per5: "For a 5.0 (Pass)", per7: "For a 7.0 (Good)", impossible: "⚠️ It is not possible to reach this grade with the current P values." },
    calculatorStatus: { excelent: "🎉 Excellent! You passed with a good grade.", be: "✅ Good! You passed.", justet: "⚠️ Just barely! You passed but it's better to improve.", suspes: "❌ Failed. You need a higher grade." },
    enllacos: { title: "Useful Links", subtitle: "Useful resources for Programming 1.", webOficial: "Official PRO1 Website", webOficialDesc: "Official page for the Programming 1 course at FIB-UPC.", guiaDocent: "Course Guide", guiaDocentDesc: "Official course information: schedules, assessment, and bibliography.", jutge: "Jutge.org", jutgeDesc: "Automated judge for UPC programming problems.", llicons: "C++ Lessons", lliconsDesc: "Interactive C++ lessons from Jutge.org to practice.", minidosis: "Minidosis", minidosisDesc: "Video collection created by professor Pau Fernández. Useful complement, topics 1 to 13 approximately correspond to PRO1." },
    lang: { ca: "Catalan", es: "Spanish", en: "English" }
  }
};

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

function applyTranslations(lang) {
  const t = translations[lang] || translations.ca;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const value = getNestedValue(t, key);
      if (value) el.textContent = value;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      const value = getNestedValue(t, key);
      if (value) el.setAttribute('placeholder', value);
    }
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key) {
      const value = getNestedValue(t, key);
      if (value) {
        el.setAttribute('title', value);
        el.setAttribute('aria-label', value);
      }
    }
  });
  window.dispatchEvent(new CustomEvent('lang-changed', { detail: lang }));
}

window.applyTranslations = applyTranslations;
window.getNestedValue = getNestedValue;
window.translations = translations;
