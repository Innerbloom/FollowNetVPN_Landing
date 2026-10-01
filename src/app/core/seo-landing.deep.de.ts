import type { DeepGuides } from './seo-landing.deep';

const CTA = 'Im App Store laden';

export const DEEP: DeepGuides = {
  'what-is-a-vpn': {
    h1: 'Was ist ein VPN? Einfach erklärt für iPhone-Nutzer',
    lead:
      'Ein VPN (virtuelles privates Netzwerk) verschlüsselt die Verbindung zwischen Ihrem Gerät und einem VPN-Server – so sehen das WLAN, in dem Sie sind, und Ihr Internetanbieter deutlich weniger von dem, was Sie tun. Hier erfahren Sie, wie das funktioniert, was es schützt, was nicht, und wie FollowNet es auf dem iPhone umsetzt.',
    sections: [
      {
        title: 'Die kurze Antwort',
        body:
          'Normalerweise spricht jede App auf Ihrem iPhone direkt über das Netz, mit dem Sie verbunden sind, mit dem Internet – Café-Hotspot, Hotelrouter, Mobilfunkanbieter. Wer dieses Netz betreibt, sieht, welche Server Sie kontaktieren, und bei unverschlüsseltem Verkehr auch, was Sie senden. Ein VPN packt diesen gesamten Verkehr in einen verschlüsselten Tunnel zu einem Server Ihrer Wahl. Das lokale Netz sieht nur verschlüsselte Daten zu einem Server; Websites sehen die IP-Adresse des VPN-Servers statt Ihrer eigenen.',
      },
      {
        title: 'Was ein VPN tatsächlich schützt',
        body:
          'Ein VPN schützt den Weg zwischen Ihrem Gerät und dem VPN-Server. Das zählt vor allem in Netzen, die Sie nicht kontrollieren: öffentliches WLAN in Cafés, Flughäfen und Hotels, Gästenetze in Büros und Reise-SIM-Karten. Der Netzbetreiber sieht nicht, welche Websites und Apps Sie nutzen, Mitlesen im geteilten Hotspot wird verhindert, und es wird schwerer, einzelne Dienste anhand Ihres Verkehrs zu drosseln oder zu sperren.',
      },
      {
        title: 'Was ein VPN nicht kann',
        body:
          'Ein VPN ist kein Virenschutz und macht Sie nicht anonym. Wenn Sie bei Google, Instagram oder Ihrer Bank angemeldet sind, wissen diese Dienste weiterhin, dass Sie es sind. Es stoppt keine Phishing-Links, gefälschten Anmeldeseiten oder Schadsoftware, die Sie selbst installieren. Cookies, Konten und Zahlungsdaten können Sie weiterhin identifizieren. Vorsicht bei VPNs, die „totale Anonymität“ oder „militärische Unsichtbarkeit“ versprechen – das ist Werbung, keine Funktion.',
      },
      {
        title: 'Wie ein VPN auf dem iPhone funktioniert',
        body:
          'iOS hat für VPN-Apps ein eingebautes Framework namens Network Extension. Wenn Sie ein VPN aus dem App Store installieren und auf Verbinden tippen, fragt iOS einmal nach der Erlaubnis, eine VPN-Konfiguration hinzuzufügen. Danach baut die App den Tunnel auf und iOS leitet den Geräteverkehr hindurch – Safari, Messenger, Mail, jede App. Solange er aktiv ist, sehen Sie das VPN-Symbol in der Statusleiste. FollowNet basiert auf diesem Framework, nicht auf einem heruntergeladenen Konfigurationsprofil.',
        image: 'connect',
        imageCaption: 'FollowNet verbunden: Der Timer läuft, das aktive Protokoll steht unter dem Status.',
      },
      {
        title: 'Protokolle: die „Sprache“ des Tunnels',
        body:
          'Ein VPN-Protokoll legt fest, wie der verschlüsselte Tunnel aufgebaut wird. WireGuard ist modern und schnell; IKEv2 verbindet sich beim Wechsel zwischen WLAN und LTE sanft neu; AmneziaWG, Hysteria2 und VLESS Reality helfen in Netzen, die gewöhnlichen VPN-Verkehr bremsen oder blockieren. Am ersten Tag müssen Sie sie nicht kennen: Smart Connect in FollowNet wählt ein passendes Protokoll für Ihr Netz und weicht auf ein anderes aus, wenn es scheitert.',
        image: 'protocol',
        imageCaption: 'Einstellungen → VPN-Protokoll: auf Smart lassen oder selbst wählen.',
      },
      {
        title: 'Brauchen Sie eines?',
        body:
          'Wenn Sie regelmäßig öffentliches oder Gäste-WLAN nutzen, reisen, im Café arbeiten oder in einem Netz mit Filtern sind, ist ein VPN ein sinnvolles Alltagswerkzeug. Zu Hause im eigenen Netz liegt der Nutzen vor allem im Schutz vor dem Internetanbieter. Am einfachsten entscheiden Sie, indem Sie es in Ihren echten Netzen ausprobieren: FollowNet Free enthält wöchentliches Datenvolumen ohne Kreditkarte.',
      },
    ],
    steps: {
      title: 'Ein VPN auf dem iPhone in fünf Schritten testen',
      items: [
        'Installieren Sie FollowNet aus dem App Store.',
        'Melden Sie sich mit dem Code aus Ihrer E-Mail an – kein Passwort nötig.',
        'Tippen Sie auf Verbinden und erlauben Sie die VPN-Konfiguration, wenn iOS fragt (nur beim ersten Mal).',
        'Lassen Sie das Protokoll auf Smart und prüfen Sie das VPN-Symbol in der Statusleiste.',
        'Öffnen Sie einige Websites und Apps und starten Sie dann den Speed Test, um Ihr echtes Tempo zu sehen.',
      ],
    },
    table: {
      title: 'Ohne VPN und mit VPN',
      head: ['', 'Ohne VPN', 'Mit VPN'],
      rows: [
        ['Was der WLAN-Betreiber sieht', 'Welche Server und Websites Sie kontaktieren', 'Verschlüsselten Verkehr zu einem VPN-Server'],
        ['Was Websites sehen', 'Ihre echte IP-Adresse', 'Die IP-Adresse des VPN-Servers'],
        ['Schutz im öffentlichen WLAN', 'Hängt vom HTTPS jeder Website ab', 'Gesamter Weg zum VPN-Server verschlüsselt'],
        ['Anmeldungen, Cookies, Konten', 'Identifizieren Sie', 'Identifizieren Sie weiterhin'],
        ['Phishing und Schadsoftware', 'Nicht blockiert', 'Vom VPN selbst nicht blockiert'],
      ],
    },
    bullets: [
      'Ein VPN verschlüsselt den Weg vom Gerät zum VPN-Server',
      'Am nützlichsten im öffentlichen WLAN, auf Reisen und in gefilterten Netzen',
      'Kein Virenschutz und keine Anonymität – Konten erkennen Sie weiterhin',
      'App-Store-VPNs nutzen auf dem iPhone Apples Network Extension',
      'FollowNet Free zum Testen mit Wochenvolumen, ohne Kreditkarte',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist die Nutzung eines VPN legal?', a: 'In den meisten Ländern ja, die Regeln unterscheiden sich aber. Sie sind selbst dafür verantwortlich, lokale Gesetze und die Bedingungen der genutzten Dienste einzuhalten.' },
      { q: 'Macht ein VPN mein iPhone langsamer?', a: 'Verschlüsselung und der Umweg über den Server kosten etwas. Ein naher Server und ein modernes Protokoll wie WireGuard halten den Unterschied meist klein; der Speed Test zeigt die echten Werte.' },
      { q: 'Verbraucht ein VPN viel Akku?', a: 'Ein wenig. Ein offener Tunnel braucht etwas Energie, vor allem bei schwachem Mobilfunksignal. Moderne Protokolle sind sparsam, im Alltag merkt man es kaum.' },
      { q: 'Ist ein kostenloses VPN sicher?', a: 'Das hängt vom Anbieter ab. Lesen Sie die Datenschutzerklärung und prüfen Sie, wie der Gratistarif finanziert wird. FollowNet Free ist ein echtes VPN mit Wochenlimit und veröffentlichter Datenschutzerklärung.' },
    ],
  },

  'how-vpn-works': {
    h1: 'Wie ein VPN auf dem iPhone funktioniert: Tunnel, Protokolle, Server und DNS',
    lead:
      'Ein VPN sieht aus wie ein einzelner Schalter, doch dahinter arbeiten vier Dinge zusammen: ein verschlüsselter Tunnel, das Protokoll, das ihn aufbaut, der Server, über den Ihr Verkehr ins Internet geht, und der DNS-Resolver, der Namen in Adressen übersetzt. Wir gehen sie am Beispiel von FollowNet auf dem iPhone durch.',
    sections: [
      {
        title: '1. Der Tunnel',
        body:
          'Wenn Sie auf Verbinden tippen, bittet FollowNet iOS, eine Network Extension zu starten. Sie öffnet eine verschlüsselte Verbindung zu einem VPN-Server, und iOS leitet den Geräteverkehr hinein. Jedes Paket wird auf dem iPhone verschlüsselt, zum Server geschickt, dort entschlüsselt und weitergeleitet. Antworten nehmen denselben Weg zurück. Für das Café- oder Hotelnetz sieht das wie ein einziger verschlüsselter Datenstrom zu einer Adresse aus.',
      },
      {
        title: '2. Das Protokoll',
        body:
          'Das Protokoll bestimmt, wie der Tunnel ausgehandelt und wie Pakete verpackt werden. WireGuard ist schlank und in ruhigen Netzen schnell. IKEv2 setzt den Tunnel beim Wechsel zwischen WLAN und LTE gut fort. AmneziaWG behält den WireGuard-Kern, verändert aber das Erscheinungsbild des Verkehrs; Hysteria2 läuft über QUIC und kommt mit Paketverlust zurecht; VLESS Reality tarnt die Verbindung als gewöhnliches HTTPS. Smart Connect wählt für Sie.',
        image: 'protocol',
        imageCaption: 'Protokolle in FollowNet. Smart wählt eines und weicht automatisch aus.',
      },
      {
        title: '3. Der Server (Ausgangspunkt)',
        body:
          'Am Server verlässt Ihr Verkehr den Tunnel und geht ins offene Internet. Websites sehen die IP-Adresse dieses Servers und seinen ungefähren Standort. Ein näherer Server bedeutet meist weniger Latenz; ein anderes Land ändert, welche regionale Version mancher Dienste Sie sehen. In FollowNet zeigt die Serverliste den Ping jedes Standorts, und „Optimaler Standort“ wählt automatisch einen schnellen.',
        image: 'servers',
        imageCaption: 'Die Serverliste mit Ping, Free- und Premium-Standorten und Favoriten.',
      },
      {
        title: '4. DNS',
        body:
          'Bevor Ihr iPhone eine Website öffnen kann, muss es den Namen (example.com) in eine IP-Adresse übersetzen. Das ist DNS. Während FollowNet verbunden ist, wählen Sie, wer antwortet: der Standard-Resolver oder Vorlagen wie Cloudflare, Google, Quad9 oder AdGuard (das zusätzlich Werbe- und Tracker-Domains blockiert). DNS ist von der Verschlüsselung getrennt – es entscheidet, wer Namen auflöst, nicht ob der Tunnel verschlüsselt ist.',
        image: 'dns',
        imageCaption: 'Einstellungen → DNS: Resolver für Datenschutz, Tempo oder Filter wählen.',
      },
      {
        title: 'Zusammenspiel: Smart Connect und Profile',
        body:
          'Smart Connect kümmert sich um die Protokollebene: Es startet mit der Option, die in Ihrem Netz am wahrscheinlichsten funktioniert, und steigt eine Ausweichkette hinauf, wenn der Verbindungsaufbau scheitert oder kein Verkehr durchkommt. Netzwerkprofile bündeln Protokoll, DNS, automatisches Verbinden und Servermodus in einem Tipp – etwa Public Wi‑Fi (WireGuard, Quad9, nur WLAN, schnellster Server) oder Travel (IKEv2, Cloudflare, immer).',
      },
      {
        title: 'Wo der Schutz endet',
        body:
          'Die Verschlüsselung endet am VPN-Server. Ab dort reist Ihr Verkehr wie jeder andere Internetverkehr, deshalb bleibt HTTPS auf den Websites selbst wichtig. Das VPN funktioniert auch nicht, bevor Sie die Anmeldeseite im Hotel- oder Flughafen-WLAN erledigt haben – solche Captive Portals brauchen zuerst eine direkte Verbindung. Und am Computer ist die Chrome-Erweiterung von FollowNet ein Browser-Proxy: Sie schützt Chrome-Tabs, nicht jede App.',
      },
    ],
    steps: {
      title: 'Jede Ebene selbst ausprobieren',
      items: [
        'Verbinden Sie sich mit dem Protokoll Smart und merken Sie sich, welches Protokoll FollowNet anzeigt.',
        'Öffnen Sie den Speed Test und messen Sie Latenz, Download und Upload auf dem aktuellen Server.',
        'Wechseln Sie zu einem Server in einem anderen Land und testen Sie erneut – die Latenz hängt von der Entfernung ab.',
        'Stellen Sie DNS in den Einstellungen auf Quad9 oder AdGuard und laden Sie einige Websites neu.',
        'Probieren Sie das Profil Public Wi‑Fi oder Travel, um alle Ebenen auf einmal zu setzen.',
      ],
    },
    table: {
      title: 'Die vier Ebenen im Überblick',
      head: ['Ebene', 'Was sie bestimmt', 'Wo in FollowNet ändern'],
      rows: [
        ['Tunnel', 'Verkehr ist zwischen iPhone und Server verschlüsselt', 'Verbinden-Taste'],
        ['Protokoll', 'Wie der Tunnel aufgebaut wird und im Netz aussieht', 'Einstellungen → VPN-Protokoll'],
        ['Server', 'Wo der Verkehr austritt und welche IP Websites sehen', 'Serverliste / Optimaler Standort'],
        ['DNS', 'Wer Website-Namen in Adressen übersetzt', 'Einstellungen → DNS'],
      ],
    },
    bullets: [
      'Tunnel, Protokoll, Server und DNS sind getrennte Ebenen',
      'Smart Connect wählt das Protokoll und weicht automatisch aus',
      'Die Serverwahl bestimmt Latenz und die IP, die Websites sehen',
      'DNS-Vorlagen ändern den Resolver, nicht die Verschlüsselung',
      'Netzwerkprofile setzen alle Ebenen mit einem Tipp',
    ],
    cta: CTA,
    faq: [
      { q: 'Sieht mein Internetanbieter, dass ich ein VPN nutze?', a: 'Meist sieht er, dass Sie mit einem VPN-Server verbunden sind, aber nicht, was im Tunnel steckt. Protokolle wie VLESS Reality lassen die Verbindung eher wie gewöhnliches HTTPS aussehen.' },
      { q: 'Verschlüsselt das VPN auch Verkehr, der schon HTTPS ist?', a: 'Ja, mit einer zweiten Schicht. HTTPS schützt den Inhalt; das VPN verbirgt zusätzlich vor dem lokalen Netz, welche Websites Sie aufrufen.' },
      { q: 'Warum verhalten sich manche Apps mit VPN anders?', a: 'Manche Dienste passen Inhalte oder Sicherheitsprüfungen an IP und Standort des Servers an. Ein näherer Server hilft meistens.' },
      { q: 'Läuft der gesamte Verkehr meines iPhones durch den Tunnel?', a: 'Solange das VPN verbunden ist, leitet iOS den Geräteverkehr hindurch. Einige Systemdienste und lokaler Netzwerkverkehr folgen Apples eigenen Regeln.' },
    ],
  },

  'do-i-need-a-vpn': {
    h1: 'Brauche ich ein VPN auf dem iPhone? Eine ehrliche Checkliste',
    lead:
      'Sie brauchen ein VPN nicht für alles – aber in einigen typischen Situationen ist es der einfachste zusätzliche Schutz. Diese Checkliste hilft bei der Entscheidung anhand Ihrer echten Nutzung, ganz ohne Angstmache.',
    sections: [
      {
        title: 'Wann ein VPN klar hilft',
        body:
          'Der klassische Fall ist öffentliches und Gäste-WLAN: Cafés, Flughäfen, Hotels, Coworking-Spaces und Konferenznetze teilen Sie mit Fremden, betrieben von Leuten, die Sie nicht kennen. Ein VPN verschlüsselt alles zwischen iPhone und VPN-Server, sodass der Hotspot nicht sieht, welche Dienste Sie nutzen. Es hilft auch mit Reise-SIMs und in Netzen, die bestimmte Dienste drosseln oder filtern.',
      },
      {
        title: 'Wann es ein wenig hilft',
        body:
          'Zu Hause am eigenen Router bringt ein VPN vor allem Privatsphäre gegenüber Ihrem Internetanbieter, der sonst die besuchten Domains sieht. Teilen Sie Ihr Heimnetz mit Gästen oder Mitbewohnern, ist das ein weiterer Grund. Remote-Arbeitende, die am Tag mehrere Netze nutzen, profitieren von einem gleichbleibend verschlüsselten Weg.',
      },
      {
        title: 'Wann ein VPN das Problem nicht löst',
        body:
          'Ein VPN stoppt keine Phishing-Mails, Betrugsseiten, schwachen Passwörter oder Schadsoftware. Es macht Sie nicht anonym gegenüber Diensten, bei denen Sie angemeldet sind. Es garantiert keinen Zugang zu jedem Streaming-Katalog und ersetzt kein Firmen-VPN, wenn Ihr Arbeitgeber eines verlangt. Wenn Sie das beschäftigt, beginnen Sie mit Updates, einem Passwortmanager und Zwei-Faktor-Authentifizierung.',
      },
      {
        title: 'Ein einfacher Entscheidungsweg',
        body:
          'Denken Sie an die letzte Woche. Waren Sie mindestens einmal in einem Netz, das Sie nicht kontrollieren, lohnt es sich, ein VPN bereitzuhalten. Richten Sie es so ein, dass Sie nicht daran denken müssen: Das automatische Verbinden von FollowNet startet das VPN bei jedem WLAN, ohne die mobilen Daten zu berühren – oder immer, in jedem Netz.',
        image: 'autoconnect',
        imageCaption: 'Automatisch verbinden: Aus, nur WLAN, nur LTE oder immer.',
      },
      {
        title: 'Gratis oder kostenpflichtig?',
        body:
          'Erst testen, dann zahlen. FollowNet Free ist ein echtes VPN mit wöchentlichem Datenvolumen, denselben Protokollen und Smart Connect, ohne Kreditkarte. Premium hebt das Wochenlimit auf, öffnet Premium-Standorte und deckt bis zu fünf Geräte ab. Reicht Free für Ihre Café- und Reisesitzungen, brauchen Sie vielleicht nie mehr.',
      },
    ],
    steps: {
      title: 'Ein VPN einrichten, an das Sie nicht denken müssen',
      items: [
        'Installieren Sie FollowNet und melden Sie sich mit einem E-Mail-Code an.',
        'Verbinden Sie sich einmal und erlauben Sie die iOS-VPN-Konfiguration.',
        'Öffnen Sie Einstellungen → Automatisch verbinden und wählen Sie „Nur WLAN“ (oder „Immer“).',
        'Lassen Sie das Protokoll auf Smart, damit schwierige Netze automatisch behandelt werden.',
        'Schauen Sie nach einer Woche in die Statistik, wie viel Volumen Sie wirklich brauchen.',
      ],
    },
    table: {
      title: 'Ihre Situation und ob ein VPN hilft',
      head: ['Situation', 'Hilft ein VPN?', 'Warum'],
      rows: [
        ['WLAN in Café, Flughafen oder Hotel', 'Ja, deutlich', 'Geteiltes Netz, von Fremden betrieben'],
        ['Reise-SIM oder Roaming', 'Ja', 'Unbekanntes Netz, manchmal gefiltert'],
        ['Eigenes Heim-WLAN', 'Etwas', 'Privatsphäre gegenüber dem Anbieter'],
        ['Phishing- oder Betrugslinks', 'Nein', 'Braucht Vorsicht und Sicherheitstools, keinen Tunnel'],
        ['Arbeitgeber verlangt sein VPN', 'Dessen VPN nutzen', 'Firmenrichtlinie geht vor'],
      ],
    },
    bullets: [
      'Am wertvollsten in fremdem WLAN und auf Reisen',
      'Zu Hause mehr Privatsphäre gegenüber dem Anbieter',
      'Ersetzt keine Updates, Passwörter oder Vorsicht bei Links',
      'Automatisches Verbinden macht den Schutz im WLAN automatisch',
      'Mit dem Free-Wochenvolumen vor dem Bezahlen entscheiden',
    ],
    cta: CTA,
    faq: [
      { q: 'Brauche ich ein VPN bei mobilen Daten?', a: 'Mobilfunknetze sind meist sicherer als offenes WLAN. Ein VPN über LTE bringt vor allem Privatsphäre gegenüber dem Anbieter und hilft in gefilterten oder Roaming-Netzen.' },
      { q: 'Sollte das VPN immer an sein?', a: 'Das geht. „Immer“ hält es überall aktiv; „Nur WLAN“ ist ein guter Kompromiss, wenn es Ihnen vor allem um Hotspots geht.' },
      { q: 'Ersetzt iCloud Privat-Relay ein VPN?', a: 'Privat-Relay deckt nur Safari und einen Teil des Verkehrs ab. Ein VPN schützt alle Apps des Geräts und lässt Sie den Serverstandort wählen.' },
      { q: 'Schützt ein VPN meine Banking-App?', a: 'Es verschlüsselt den Weg in unsicheren Netzen, was nützlich ist. Die Sicherheit des Bankings selbst hängt weiterhin von der App der Bank, HTTPS und Ihrer Gerätesicherheit ab.' },
    ],
  },

  'vpn-for-beginners': {
    h1: 'VPN für Einsteiger: FollowNet auf dem iPhone in fünf Minuten einrichten',
    lead:
      'Noch nie ein VPN benutzt? Um geschützt zu sein, müssen Sie keine Protokolle verstehen. Dieser Einsteiger-Ratgeber zeigt die Installation, die eine iOS-Abfrage, die Sie sehen werden, was der Hauptbildschirm bedeutet und die drei Einstellungen, die man kennen sollte.',
    sections: [
      {
        title: 'Was Sie brauchen',
        body:
          'Ein iPhone oder iPad mit aktuellem iOS, eine E-Mail-Adresse und etwa fünf Minuten. FollowNet Free fragt nicht nach einer Kreditkarte. Sie melden sich mit einem Einmalcode per E-Mail an – kein Passwort zum Ausdenken oder Vergessen.',
      },
      {
        title: 'Die Berechtigungsabfrage von iOS',
        body:
          'Beim ersten Tippen auf Verbinden meldet iOS, dass FollowNet eine VPN-Konfiguration hinzufügen möchte. Das ist bei jedem VPN aus dem App Store so – auf diese Weise erlaubt Apple einer App einen systemweiten Tunnel. Tippen Sie auf „Erlauben“ und bestätigen Sie mit Face ID oder Code. Das passiert nur einmal; danach verbinden Sie sich mit einem Tipp.',
      },
      {
        title: 'Den Hauptbildschirm verstehen',
        body:
          'Wird die große Taste grün und läuft der Timer, sind Sie verbunden. Unter dem Timer zeigt FollowNet das verwendete Protokoll, unten den aktuellen Standort mit Ping. Das VPN-Symbol in der Statusleiste bestätigt den aktiven Tunnel. Zum Trennen tippen Sie erneut auf die Taste.',
        image: 'connect',
        imageCaption: 'Verbunden: Timer, Protokoll und aktueller Standort auf einen Blick.',
      },
      {
        title: 'Drei Einstellungen, die man kennen sollte',
        body:
          'Protokoll: auf Smart lassen – FollowNet wählt, was im jeweiligen Netz funktioniert. Automatisch verbinden: „Nur WLAN“, damit das VPN bei jedem Hotspot startet. Standort: „Optimaler Standort“ für Tempo oder ein Land aus der Liste. Alles andere – DNS, Netzwerkprofile, Kurzbefehle – kann warten, bis Sie neugierig werden.',
        image: 'settings',
        imageCaption: 'Einstellungen: Protokoll, DNS, automatisch verbinden, Netzwerkprofile und weitere Geräte.',
      },
      {
        title: 'Wenn etwas nicht funktioniert',
        body:
          'Die meisten Probleme haben einfache Ursachen. Im Hotel- oder Flughafen-WLAN erst die Anmeldeseite in Safari erledigen, dann verbinden. Hängt die Verbindung, Smart anlassen oder einen anderen Standort wählen. Im Free-Tarif in der Statistik prüfen, ob noch Wochenvolumen übrig ist. WLAN aus- und wieder einschalten behebt viele einmalige Aussetzer.',
      },
      {
        title: 'Auf anderen Geräten',
        body:
          'Dasselbe Konto funktioniert auf dem iPad und in der FollowNet-Erweiterung für Chrome am Computer. Melden Sie sich auf einem neuen Gerät mit derselben E-Mail an oder scannen Sie einen QR-Code unter Einstellungen → Weitere Geräte auf Ihrem Telefon. Die Chrome-Erweiterung schützt nur Browser-Tabs, die Apps für iPhone und iPad das ganze Gerät.',
      },
    ],
    steps: {
      title: 'Ihre erste Verbindung Schritt für Schritt',
      items: [
        'Laden Sie FollowNet aus dem App Store und öffnen Sie die App.',
        'Geben Sie Ihre E-Mail ein und den Code, den Sie erhalten.',
        'Tippen Sie auf die große Verbinden-Taste.',
        'Tippen Sie bei der iOS-Abfrage auf „Erlauben“ und bestätigen Sie mit Face ID oder Code.',
        'Warten Sie, bis der Timer läuft und das VPN-Symbol in der Statusleiste erscheint.',
        'Optional: Einstellungen → Automatisch verbinden → Nur WLAN.',
      ],
    },
    bullets: [
      'Keine Kreditkarte und kein Passwort: Anmeldung per E-Mail-Code',
      'iOS-Abfrage einmal erlauben, dann mit einem Tipp verbinden',
      'Protokoll auf Smart lassen – keine technischen Entscheidungen nötig',
      '„Nur WLAN“ schützt Sie automatisch in Hotspots',
      'Dasselbe Konto funktioniert auf iPad und in Chrome',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist es sicher, die VPN-Konfiguration zu erlauben?', a: 'Ja, bei einem App-Store-VPN ist das Apples Standardweg. Sie können sie jederzeit in den iOS-Einstellungen → VPN oder durch Löschen der App entfernen.' },
      { q: 'Muss ich technische Einstellungen ändern?', a: 'Nein. Die Voreinstellungen – Protokoll Smart und Optimaler Standort – passen für die meisten. Nur das automatische Verbinden lohnt sich für Einsteiger zu ändern.' },
      { q: 'Woran erkenne ich, dass das VPN an ist?', a: 'Die FollowNet-Taste ist grün, der Timer läuft und in der Statusleiste erscheint das VPN-Symbol.' },
      { q: 'Was passiert, wenn das Free-Volumen aufgebraucht ist?', a: 'Neue Verbindungen pausieren bis zur wöchentlichen Erneuerung, oder Sie wechseln zu Premium mit unbegrenztem Datenvolumen.' },
    ],
  },

  'free-vpn-vs-paid': {
    h1: 'Kostenloses VPN oder Bezahl-VPN: was Sie wirklich bekommen (und hergeben)',
    lead:
      '„Kostenlose“ VPNs reichen von ehrlichen Tarifen mit Limit bis zu Apps, die Ihre Daten verkaufen. Bezahlte Tarife sind auch nicht automatisch besser. Hier steht, worin sie sich wirklich unterscheiden, was Sie vor dem Vertrauen prüfen sollten und wie sich Free und Premium bei FollowNet vergleichen.',
    sections: [
      {
        title: 'Wie sich kostenlose VPNs finanzieren',
        body:
          'Server kosten Geld, also wird jedes Gratis-VPN irgendwie finanziert. Ehrliche Modelle sind ein begrenzter Gratistarif, der zum Upgrade einlädt, oder Werbung in der App. Problematische Modelle verkaufen Surfdaten, schleusen Werbung in den Verkehr oder bauen Tracking-SDKs ein. Datenschutzerklärung und das Datenschutzetikett im App Store zeigen meist, womit Sie es zu tun haben.',
      },
      {
        title: 'Typische Grenzen von Gratistarifen',
        body:
          'Rechnen Sie mit einem Datenlimit (täglich, wöchentlich oder monatlich), weniger Standorten, langsameren oder volleren Servern, Werbung oder einem Zeitlimit pro Sitzung. Das allein ist kein Problem – zum Problem wird es, wenn es versteckt ist. Ein guter Gratistarif zeigt sein Limit offen, damit Sie sehen, wann Sie sich ihm nähern.',
      },
      {
        title: 'FollowNet Free in der Praxis',
        body:
          'FollowNet Free ist dieselbe App mit denselben Protokollen, Smart Connect, DNS-Vorlagen und automatischem Verbinden. Der Unterschied ist ein wöchentliches Datenvolumen und die Free-Standorte. Die Statistik zeigt, wie viel Sie verbraucht haben und wie viel diese Woche übrig ist; das Volumen erneuert sich wöchentlich statt täglich.',
        image: 'stats',
        imageCaption: 'Statistik: Sitzungen, Zeit, verbrauchte Daten und Wochenlimit.',
      },
      {
        title: 'Was Premium hinzufügt',
        body:
          'Premium hebt das Wochenlimit auf, schaltet Premium-Standorte frei, gilt für bis zu fünf Geräte und entfernt Werbung. Es wird über den App Store als Monats- oder Jahresabo gekauft; das Jahresabo enthält eine kurze Gratis-Testphase, die im Zahlungsfenster von Apple angezeigt wird. Die Verschlüsselung ist in beiden Tarifen gleich – Sie zahlen für Kapazität und Auswahl, nicht für „mehr Sicherheit“.',
        image: 'premium',
        imageCaption: 'Premium: unbegrenztes Volumen, alle Premium-Server, Smart Connect und bis zu fünf Geräte.',
      },
      {
        title: 'Warnsignale bei jedem VPN',
        body:
          'Vorsicht bei Apps ohne erkennbares Unternehmen oder Datenschutzerklärung, mit Versprechen wie „100 % Anonymität“, gefälschten Countdown-Timern oder Behauptungen über Tausende Server in jedem Land. Prüfen Sie auch die Kündigung: Über den App Store gekaufte Abos lassen sich jederzeit in den Apple-ID-Einstellungen verwalten und kündigen.',
      },
    ],
    table: {
      title: 'FollowNet Free und Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Datenvolumen', 'Wöchentliches Volumen, in der App angezeigt', 'Unbegrenzt'],
        ['Standorte', 'Free-Standorte', 'Free- und Premium-Standorte'],
        ['Protokolle und Smart Connect', 'Enthalten', 'Enthalten'],
        ['DNS-Vorlagen, automatisch verbinden, Speed Test', 'Enthalten', 'Enthalten'],
        ['Geräte', 'Ihre Geräte im Rahmen des Free-Volumens', 'Bis zu 5 Geräte'],
        ['Werbung', 'In manchen Regionen möglich', 'Keine'],
      ],
    },
    steps: {
      title: 'In einer Woche entscheiden',
      items: [
        'Nutzen Sie FollowNet Free in Ihren echten Netzen – Café, Büro, Reisen.',
        'Schauen Sie am Ende der Woche in die Statistik.',
        'Sind Sie im Limit geblieben und haben die Free-Standorte gepasst, bleiben Sie bei Free.',
        'Haben Sie das Limit erreicht oder brauchen einen bestimmten Premium-Standort, erwägen Sie Premium.',
        'Im Zweifel mit dem Monatsabo starten und später zum Jahresabo wechseln.',
      ],
    },
    bullets: [
      'Jedes Gratis-VPN finanziert sich irgendwie – prüfen Sie wie',
      'Ein guter Gratistarif zeigt seine Grenzen offen',
      'FollowNet Free: dieselben Protokolle, wöchentliches Volumen',
      'Premium: unbegrenzt, mehr Standorte, bis zu fünf Geräte',
      'Die Verschlüsselung hängt nicht vom Tarif ab',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist FollowNet Free wirklich kostenlos?', a: 'Ja. Keine Kreditkarte nötig. Sie erhalten ein wöchentliches Datenvolumen; Premium ist optional.' },
      { q: 'Ist ein bezahltes VPN sicherer als ein kostenloses?', a: 'Nicht automatisch. Sicherheit hängt von Protokollen und der Praxis des Anbieters ab. Bei FollowNet nutzen beide Tarife dieselbe Verschlüsselung.' },
      { q: 'Kann ich Premium jederzeit kündigen?', a: 'Ja. Abos werden über Ihre Apple-ID verwaltet; kündigen Sie vor der Verlängerung, bleibt der Zugang bis zum Ende des bezahlten Zeitraums.' },
      { q: 'Gilt ein Premium-Abo auch für mein iPad?', a: 'Ja, Premium deckt bis zu fünf Geräte mit demselben Konto ab, einschließlich der Chrome-Erweiterung.' },
    ],
  },

  'vpn-vs-proxy': {
    h1: 'VPN oder Proxy: Was ist der Unterschied und was brauchen Sie?',
    lead:
      'Ein VPN und ein Proxy leiten Ihren Verkehr beide über einen anderen Server, daher werden sie oft verwechselt. Der eigentliche Unterschied ist der Umfang: Ein VPN deckt das ganze Gerät ab, ein Proxy meist eine App – typischerweise den Browser. Hier sehen Sie, wann was sinnvoll ist, am Beispiel der FollowNet-App fürs iPhone und der Chrome-Erweiterung.',
    sections: [
      {
        title: 'Was ein Proxy macht',
        body:
          'Ein Proxy ist ein Server, der Anfragen einer einzelnen Anwendung weiterleitet. Sie richten ihn in dieser App ein – meist im Browser –, und nur deren Verkehr geht hindurch. Viele Proxys verschlüsseln selbst nichts; sichere nutzen verschlüsselte Verbindungen, doch der Umfang bleibt auf die eingerichtete App beschränkt.',
      },
      {
        title: 'Was ein VPN macht',
        body:
          'Ein VPN baut einen verschlüsselten Tunnel auf Systemebene auf. Auf dem iPhone nutzt FollowNet Apples Network Extension, sodass Safari, Messenger, Mail, Spiele und Systemdienste alle durch den Tunnel gehen, solange er aktiv ist. Sie müssen nicht jede App einzeln einrichten, und auch Apps, die Proxy-Einstellungen ignorieren, sind geschützt.',
      },
      {
        title: 'FollowNet nutzt beides – auf verschiedenen Geräten',
        body:
          'Auf iPhone und iPad ist FollowNet ein vollwertiges VPN fürs ganze Gerät. Am Computer arbeitet die FollowNet-Erweiterung für Chrome als Browser-Proxy: Sie schützt Chrome-Tabs mit demselben Konto und bietet einen optionalen Browser-Kill-Switch, Werbe- und Trackerlisten sowie Routing pro Website. Slack, Zoom und andere Desktop-Apps deckt sie nicht ab.',
      },
      {
        title: 'Wann ein Proxy genügt',
        body:
          'Wenn Sie am Laptop nur das Surfen schützen wollen – etwa im Café oder im Gemeinschaftsbüro –, ist ein Browser-Proxy leicht, schnell eingeschaltet und berührt den Rest des Systems nicht. Mit dem Routing pro Website schicken Sie nur ausgewählte Seiten hindurch, andere bleiben direkt.',
      },
      {
        title: 'Wann Sie ein VPN wollen',
        body:
          'Sobald Apps außerhalb des Browsers zählen – Messenger, Mail, Banking-Apps, Spiele, Anrufe –, brauchen Sie ein System-VPN. Auf dem Telefon ist das fast immer so, deshalb ist FollowNet auf iOS ein VPN und kein Proxy.',
      },
    ],
    table: {
      title: 'VPN und Proxy im Vergleich',
      head: ['', 'VPN (FollowNet iOS)', 'Proxy (FollowNet Chrome)'],
      rows: [
        ['Umfang', 'Alle Apps des Geräts', 'Nur Browser-Tabs'],
        ['Einrichtung', 'Eine iOS-Erlaubnis, dann ein Tipp', 'Erweiterung installieren, anmelden'],
        ['Verschlüsselung', 'Ganzer Tunnel zum VPN-Server', 'Browserverkehr zum Proxy'],
        ['Kill Switch', 'Regeln für automatisches Verbinden in iOS', 'Kill Switch im Browser'],
        ['Am besten für', 'Telefone, Schutz aller Apps', 'Surfen am Laptop an öffentlichen Orten'],
      ],
    },
    steps: {
      title: 'In der Praxis wählen',
      items: [
        'Auf iPhone oder iPad: die FollowNet-App installieren – sie schützt jede App.',
        'Auf einem Laptop, an dem Sie nur surfen: die FollowNet-Erweiterung für Chrome hinzufügen.',
        'Bei beiden mit derselben E-Mail anmelden – Konto und Tarif sind gemeinsam.',
        'Routing pro Website in Chrome nutzen, wenn nur einige Seiten über den Proxy laufen sollen.',
      ],
    },
    bullets: [
      'Proxy: eine App (meist der Browser); VPN: das ganze Gerät',
      'FollowNet auf dem iPhone ist ein System-VPN über Network Extension',
      'FollowNet für Chrome ist ein Browser-Proxy mit Kill Switch und Routing',
      'Ein Konto und ein Tarif für beides',
      'Messenger, Anrufe und Banking brauchen ein VPN, keinen Browser-Proxy',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist ein Proxy unsicherer als ein VPN?', a: 'Für den abgedeckten Verkehr nicht unbedingt, aber er deckt weniger ab. Alles außerhalb der eingerichteten App bleibt ungeschützt.' },
      { q: 'Gibt es eine FollowNet-VPN-App für Mac oder Windows?', a: 'Derzeit konzentriert sich FollowNet auf iPhone/iPad und die Chrome-Erweiterung fürs Surfen am Computer.' },
      { q: 'Kann ich die iPhone-App und die Chrome-Erweiterung zusammen nutzen?', a: 'Ja, mit demselben Konto. Premium deckt bis zu fünf Geräte ab.' },
      { q: 'Verbirgt die Chrome-Erweiterung meine IP vor Websites?', a: 'Für Seiten, die in Chrome über den Proxy geöffnet werden, sehen Websites die Adresse des Proxy-Servers.' },
    ],
  },

  'what-is-dns-leak': {
    h1: 'Was ist ein DNS-Leak und wie wählt man DNS mit VPN auf dem iPhone?',
    lead:
      'Jedes Mal, wenn Sie eine Website öffnen, fragt Ihr Gerät zuerst einen DNS-Server nach ihrer Adresse. Gehen diese Anfragen am VPN vorbei, sieht das Netz trotzdem, welche Websites Sie besuchen – das ist ein DNS-Leak. Hier steht, was das praktisch bedeutet und wie die DNS-Vorlagen von FollowNet dabei helfen.',
    sections: [
      {
        title: 'DNS in einem Absatz',
        body:
          'DNS ist das Telefonbuch des Internets. Ihr iPhone fragt einen Resolver „Welche Adresse hat example.com?“, bevor es sich verbindet. Der Resolver erfährt also jede Domain, die Sie aufrufen. Ohne VPN ist das meist der Resolver Ihres Internetanbieters oder des WLANs – und die Anfragen laufen oft unverschlüsselt.',
      },
      {
        title: 'Was ein DNS-Leak ist',
        body:
          'Ein Leak entsteht, wenn der Tunnel Ihren Verkehr schützt, Namensanfragen aber trotzdem außerhalb des Tunnels an den Resolver des lokalen Netzes gehen. Der Inhalt bleibt verschlüsselt, doch das Netz sieht die Liste der besuchten Domains. Ursachen sind meist falsch konfigurierte Apps, manuell installierte Konfigurationsprofile oder Sonderfälle im Betriebssystem.',
      },
      {
        title: 'Wie FollowNet mit DNS umgeht',
        body:
          'Solange FollowNet verbunden ist, wählen Sie den Resolver unter Einstellungen → DNS. „Standard“ nutzt den empfohlenen Resolver für maximale Kompatibilität. Cloudflare ist schnell und datenschutzorientiert, Google weit verfügbar, Quad9 blockiert bekannte schädliche Domains, AdGuard blockiert Werbung, Tracker und Phishing-Domains, und AdGuard Family filtert zusätzlich Inhalte für Erwachsene.',
        image: 'dns',
        imageCaption: 'DNS-Vorlagen in FollowNet: Standard, Cloudflare, Google, AdGuard, AdGuard Family und Quad9.',
      },
      {
        title: 'Den Resolver wählen',
        body:
          'Für die meisten ist Standard oder Cloudflare der richtige Start. Nehmen Sie Quad9 für zusätzlichen Schutz vor schädlichen Seiten, AdGuard für weniger Werbung in Apps und Browser, AdGuard Family für Kindergeräte. Funktioniert nach dem Wechsel die Bankseite oder das Firmenintranet nicht mehr, gehen Sie zurück zu Standard – filternde Resolver blockieren gelegentlich legitime Domains.',
      },
      {
        title: 'DNS ist keine Verschlüsselung',
        body:
          'Ein DNS-Wechsel ändert, wer Anfragen beantwortet; er verschlüsselt Ihren Verkehr nicht. Das macht der VPN-Tunnel. Beides zusammen ergibt verschlüsselten Verkehr und einen Resolver Ihrer Wahl. Netzwerkprofile setzen beides auf einmal – Public Wi‑Fi nutzt Quad9, Travel nutzt Cloudflare.',
      },
      {
        title: 'Auf Leaks testen',
        body:
          'Verbinden Sie FollowNet, öffnen Sie in Safari eine Website für DNS-Leak-Tests und starten Sie den erweiterten Test. Die angezeigten Resolver sollten zur gewählten Vorlage oder zum VPN-Anbieter gehören, nicht zu Ihrem Internetanbieter oder dem Hotel. Wiederholen Sie den Test nach einem Netzwechsel. Halten Sie iOS aktuell und installieren Sie keine beliebigen VPN-Konfigurationsprofile aus dem Netz.',
      },
    ],
    steps: {
      title: 'DNS in FollowNet einstellen',
      items: [
        'Verbinden Sie FollowNet.',
        'Öffnen Sie Einstellungen → DNS.',
        'Wählen Sie eine Vorlage – zum Beispiel Cloudflare oder Quad9.',
        'Laden Sie einige Websites neu und starten Sie einen DNS-Leak-Test in Safari.',
        'Wenn etwas nicht geht, zurück zu Standard.',
      ],
    },
    table: {
      title: 'Welche DNS-Vorlage für welches Ziel',
      head: ['Vorlage', 'Am besten für', 'Hinweis'],
      rows: [
        ['Standard', 'Maximale Kompatibilität', 'Empfohlener Start'],
        ['Cloudflare', 'Tempo und Datenschutz', 'Im Profil Travel'],
        ['Google', 'Zuverlässigkeit', 'Weit verfügbar'],
        ['Quad9', 'Blockieren schädlicher Domains', 'In den Profilen Public Wi‑Fi und Restricted'],
        ['AdGuard', 'Weniger Werbung und Tracker', 'Blockiert manchmal legitime Domains'],
        ['AdGuard Family', 'Kindergeräte', 'Zusätzlicher Filter für Erwachseneninhalte'],
      ],
    },
    bullets: [
      'Ein DNS-Leak verrät besuchte Domains trotz verschlüsseltem Verkehr',
      'In FollowNet wählen Sie den Resolver bei aktiver Verbindung',
      'Quad9 und AdGuard ergänzen Schutz oder Werbefilter',
      'Die DNS-Wahl ersetzt nicht die VPN-Verschlüsselung',
      'Nach Änderungen mit einer DNS-Leak-Testseite prüfen',
    ],
    cta: CTA,
    faq: [
      { q: 'Welcher DNS ist am privatesten?', a: 'Das hängt von der Richtlinie des Anbieters ab. Cloudflare und Quad9 veröffentlichen Datenschutzzusagen – lesen Sie sie und wählen Sie, wem Sie vertrauen.' },
      { q: 'Kann AdGuard DNS einen Werbeblocker ersetzen?', a: 'Es blockiert viele Werbe- und Tracker-Domains in allen Apps, kann aber keine Werbung entfernen, die von derselben Domain wie der Inhalt kommt.' },
      { q: 'Warum geht nach dem DNS-Wechsel eine Website nicht mehr?', a: 'Filternde Resolver blockieren manchmal eine benötigte Domain. Zurück zu Standard, dann sollte die Seite laden.' },
      { q: 'Muss ich DNS überhaupt ändern?', a: 'Nein. Standard funktioniert gut. DNS-Vorlagen sind ein optionales Extra für Filter oder Vorlieben.' },
    ],
  },

  'vpn-hotel-wifi': {
    h1: 'VPN im Hotel-WLAN mit dem iPhone nutzen',
    lead:
      'Hotel-WLAN ist geteilt, oft veraltet und steckt fast immer hinter einer Anmeldeseite. Damit ist es einer der besten Orte für ein VPN – und einer der nervigsten, wenn man in der falschen Reihenfolge verbindet. So klappt es.',
    sections: [
      {
        title: 'Warum Hotelnetze ein VPN verdienen',
        body:
          'Alle Gäste teilen dasselbe Netz, die Technik wird selten aktualisiert, und Sie wissen nicht, wer es betreibt. Manche Hotels protokollieren Verkehr oder blenden eigene Seiten ein. Ein VPN verschlüsselt alles zwischen iPhone und VPN-Server, sodass weder andere Gäste noch der Betreiber sehen, welche Dienste Sie nutzen.',
      },
      {
        title: 'Erst die Anmeldeseite, dann das VPN',
        body:
          'Die meisten Hotels nutzen ein Captive Portal – die Seite, auf der Sie Zimmernummer eingeben oder Bedingungen akzeptieren. Sie braucht eine direkte Verbindung. Läuft das VPN schon, lädt die Seite womöglich nicht und der Tunnel erreicht das Internet nicht. Verbinden Sie sich mit dem WLAN, erledigen Sie das Portal in Safari, prüfen Sie, ob eine normale Seite lädt, und verbinden Sie dann FollowNet.',
      },
      {
        title: 'Die richtigen Einstellungen wählen',
        body:
          'In ruhigen Hotelnetzen ist das Profil Public Wi‑Fi ideal: WireGuard für Tempo, Quad9-DNS und automatisches Verbinden im WLAN. Manche Hotels drosseln oder blockieren VPN-Verkehr; dann wechseln Sie zum Profil Restricted, das Smart Connect aktiv lässt und auf AmneziaWG, Hysteria2 oder VLESS Reality ausweichen kann.',
        image: 'autoconnect',
        imageCaption: '„Nur WLAN“ startet das VPN automatisch in jedem Hotspot.',
      },
      {
        title: 'Das Tempo ehrlich prüfen',
        body:
          'Abends, wenn alle streamen, sind Hotelleitungen oft langsam. Starten Sie den Speed Test ohne und mit VPN im selben Netz. Ist der Unterschied groß, wählen Sie einen näheren Server oder lassen „Optimaler Standort“ entscheiden. Ein VPN kann keine Bandbreite hinzufügen, die das Hotel nicht hat.',
        image: 'speedtest',
        imageCaption: 'Der Speed Test zeigt Download, Upload, Latenz, Jitter und Paketverlust.',
      },
      {
        title: 'Speichern, was funktioniert',
        body:
          'Hotelketten nutzen oft in jedem Haus dieselbe Netztechnik. Haben Sie eine funktionierende Kombination aus Protokoll, DNS und Server gefunden, speichern Sie sie als eigenes Netzwerkprofil, benannt nach der Kette. Beim nächsten Mal genügt ein Tipp.',
      },
      {
        title: 'Wenn die Verbindung ständig abbricht',
        body:
          'Manche Portale melden Sie alle paar Stunden oder jeden Tag ab. Leitet das VPN plötzlich keinen Verkehr mehr, trennen Sie es, öffnen Safari und prüfen, ob die Anmeldeseite zurück ist, melden sich erneut an und verbinden wieder. Das ist die Hotelregel, kein VPN-Fehler.',
      },
    ],
    steps: {
      title: 'Ablauf im Hotel-WLAN',
      items: [
        'Mit dem Hotel-WLAN verbinden und die Anmeldeseite in Safari erledigen.',
        'Eine normale Website öffnen, um zu prüfen, dass das Internet geht.',
        'FollowNet mit dem Profil Public Wi‑Fi oder Smart verbinden.',
        'Verbindet es nicht oder hängen Seiten, zum Profil Restricted wechseln.',
        'Speed Test starten und bei Bedarf einen näheren Server wählen.',
        'Die funktionierende Einstellung als eigenes Profil für diese Hotelkette speichern.',
      ],
    },
    bullets: [
      'Geteilte Hotelnetze sind ein Paradefall fürs VPN',
      'Immer zuerst die Anmeldeseite erledigen',
      'Public Wi‑Fi für ruhige Netze, Restricted für schwierige',
      'Der Speed Test zeigt, ob Hotel oder Server bremst',
      'Pro Hotelkette ein funktionierendes Profil speichern',
    ],
    cta: CTA,
    faq: [
      { q: 'Warum öffnet sich die Hotel-Anmeldeseite mit VPN nicht?', a: 'Das Portal braucht eine direkte Verbindung. Trennen, Anmeldung erledigen, neu verbinden.' },
      { q: 'Ist Hotel-WLAN mit Passwort sicher?', a: 'Ein gemeinsames Passwort schützt vor Außenstehenden, nicht vor anderen Gästen oder dem Betreiber. Ein VPN ergänzt diese fehlende Ebene.' },
      { q: 'Macht ein VPN langsames Hotel-WLAN schneller?', a: 'Nein. Es kann helfen, wenn das Hotel bestimmte Dienste drosselt, aber keine Bandbreite hinzufügen.' },
      { q: 'Reicht Free für einen Hotelaufenthalt?', a: 'Für Surfen, Messenger und Mail meist ja. Abendliches Streaming verbraucht das Wochenvolumen schnell; Premium ist unbegrenzt.' },
    ],
  },

  'vpn-airport-wifi': {
    h1: 'Flughafen-WLAN und VPN: privat bleiben auf Reisen',
    lead:
      'Flughafen-WLAN ist kostenlos, überfüllt und voller ähnlich klingender Netze. Ein VPN hält Ihren Verkehr verschlüsselt, während Sie auf den Flug warten. So verbinden Sie sich sicher, das können Sie vom Tempo erwarten, und so reicht ein begrenztes Free-Volumen länger.',
    sections: [
      {
        title: 'Typische Risiken am Flughafen',
        body:
          'Tausende Menschen teilen dieselben Hotspots, und ein gefälschtes Netz mit offiziell klingendem Namen ist leicht erstellt. Prüfen Sie vor dem Verbinden den offiziellen Netznamen auf den Schildern im Flughafen. Danach verschlüsselt ein VPN Ihren Verkehr, sodass weder das Netz noch andere Reisende sehen, was Sie tun.',
      },
      {
        title: 'In der richtigen Reihenfolge verbinden',
        body:
          'Flughafennetze haben fast immer eine Anmeldeseite. Verbinden Sie sich mit dem Netz, erledigen Sie die Seite (manchmal mit E-Mail oder Werbung), prüfen Sie, ob eine normale Website lädt, und tippen Sie erst dann in FollowNet auf Verbinden. Mit „Nur WLAN“ startet das VPN nach dem Portal von selbst.',
      },
      {
        title: 'Mit Überlastung rechnen',
        body:
          'Zu Stoßzeiten kann Flughafen-WLAN sehr langsam sein. Wählen Sie einen nahen Server oder „Optimaler Standort“ und starten Sie vor großen Downloads den Speed Test. Ist das WLAN unbrauchbar, wechseln Sie zu mobilen Daten – FollowNet funktioniert auch über LTE, und „Immer“ hält es in beiden Netzen aktiv.',
        image: 'servers',
        imageCaption: 'Einen nahen Standort wählen oder „Optimaler Standort“ entscheiden lassen.',
      },
      {
        title: 'Das Free-Volumen strecken',
        body:
          'Video-Streaming verbraucht das Wochenvolumen am schnellsten. Laden Sie Filme und Musik vor der Reise zu Hause herunter, nutzen Sie das VPN am Gate für Messenger, Mail, Banking und Surfen und verzichten Sie auf unnötige Speed Tests. Das verbleibende Volumen sehen Sie in der Statistik; wer oft fliegt, hebt das Limit mit Premium auf.',
        image: 'stats',
        imageCaption: 'Die Statistik zeigt, wie viel vom Wochenvolumen übrig ist.',
      },
      {
        title: 'Roaming und Ankunft',
        body:
          'Nach der Landung sind Sie vielleicht mit einer ausländischen SIM oder im Roaming unterwegs. Lassen Sie Smart Connect an: Manche Netze im Ausland behandeln VPN-Verkehr anders, und Smart Connect weicht auf ein funktionierendes Protokoll aus. Das Profil Travel nutzt IKEv2, das den Wechsel zwischen Flughafen-WLAN und Mobilfunk gut verkraftet.',
      },
    ],
    steps: {
      title: 'Vor der Reise und am Flughafen',
      items: [
        'Zu Hause: FollowNet installieren, anmelden und Inhalte offline herunterladen.',
        '„Nur WLAN“ einstellen oder das Profil Travel anwenden.',
        'Am Flughafen den offiziellen WLAN-Namen auf den Schildern prüfen.',
        'Verbinden und die Anmeldeseite erledigen.',
        'FollowNet verbinden lassen und wie gewohnt surfen, schreiben und arbeiten.',
      ],
    },
    bullets: [
      'Offiziellen Netznamen prüfen – gefälschte Hotspots gibt es',
      'Erst die Anmeldeseite, dann das VPN',
      'Einen nahen Server wählen – Flughäfen sind überlastet',
      'Videos vorher laden, um Free-Volumen zu sparen',
      'Profil Travel und Smart Connect helfen in ausländischen Netzen',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist Flughafen-WLAN gefährlich?', a: 'Es wird mit vielen Fremden geteilt und ist leicht nachzuahmen. Das offizielle Netz plus VPN beseitigt im Alltag die meisten Risiken.' },
      { q: 'Flughafen-WLAN oder mobile Daten?', a: 'Mobile Daten sind meist sicherer und manchmal schneller. Wenn Sie WLAN nutzen, lassen Sie das VPN an.' },
      { q: 'Warum ist das VPN am Flughafen langsam?', a: 'Meist ist das WLAN selbst überlastet. Ein naher Server hilft; Bandbreite hinzufügen kann das VPN nicht.' },
      { q: 'Funktioniert FollowNet im Ausland?', a: 'Ja, im Rahmen der lokalen Gesetze. Smart Connect passt sich an unterschiedliche Netzbedingungen an.' },
    ],
  },

  'vpn-for-remote-work': {
    h1: 'VPN für Remote-Arbeit: das iPhone im Café, Coworking und unterwegs schützen',
    lead:
      'Remote-Arbeit heißt E-Mail, Dokumente und Anrufe über Netze, die Sie nicht kontrollieren. Ein persönliches VPN hält diesen Verkehr verschlüsselt. Hier ist eine praktische Einrichtung für Remote-Arbeitende – und wo die Regeln Ihres Arbeitgebers Vorrang haben.',
    sections: [
      {
        title: 'Warum Remote-Arbeit Verschlüsselung braucht',
        body:
          'Ihr Tag beginnt vielleicht im Heim-WLAN, geht im Café weiter und endet im Coworking-Space oder im Zug. Jedes Netz betreibt jemand anderes. Ein VPN verschlüsselt den Weg für Mail, Chat, Cloud-Dokumente und Videoanrufe, sodass der Netzbetreiber weder sieht, welche Dienste Sie nutzen, noch unverschlüsselten Verkehr manipulieren kann.',
      },
      {
        title: 'Persönliches VPN und Firmen-VPN',
        body:
          'Stellt Ihr Unternehmen ein eigenes VPN für interne Systeme bereit, nutzen Sie es – die Firmenrichtlinie hat Vorrang, und FollowNet ist kein Ersatz dafür. FollowNet ist ein persönliches VPN: Es schützt Ihr Gerät in öffentlichen Netzen und ist ideal für Freiberufler, Auftragnehmer und alle ohne Firmen-VPN.',
      },
      {
        title: 'Empfohlene Einrichtung',
        body:
          'Stellen Sie „Nur WLAN“ ein, damit das VPN bei jedem Hotspot startet. Lassen Sie das Protokoll auf Smart für Zuverlässigkeit in wechselnden Netzen. Wählen Sie für wichtige Anrufe einen Server nahe bei Ihnen oder Ihren Gesprächspartnern – bei Video zählt die Latenz mehr als der Download.',
        image: 'autoconnect',
        imageCaption: '„Nur WLAN“ schützt Sie in jedem Café automatisch.',
      },
      {
        title: 'Anrufqualität vorher prüfen',
        body:
          'Starten Sie den Speed Test zehn Minuten vor einem Meeting. Achten Sie auf Latenz und Jitter, nicht nur auf den Download: Hoher Jitter sorgt selbst bei schneller Leitung für abgehackten Ton. Sieht es schlecht aus, versuchen Sie einen anderen nahen Server oder führen den Anruf über mobile Daten.',
        image: 'speedtest',
        imageCaption: 'Für Videoanrufe zählen Jitter und Paketverlust am meisten.',
      },
      {
        title: 'Telefon und Laptop mit einem Konto',
        body:
          'Nutzen Sie FollowNet auf dem iPhone für alle Apps und die FollowNet-Erweiterung für Chrome am Laptop für browserbasierte Arbeit – Webmail, Google Docs, Notion, CRM. Ein Premium-Abo deckt bis zu fünf Geräte ab. Denken Sie daran: Die Chrome-Erweiterung schützt nur Chrome-Tabs, keine Desktop-Apps wie Slack oder Zoom.',
      },
      {
        title: 'Wenn Free nicht reicht',
        body:
          'Tägliche Videoanrufe und große Uploads verbrauchen viel Volumen. Arbeiten Sie täglich remote, ist das unbegrenzte Premium die praktische Wahl; Free passt gut für gelegentliche Café-Sitzungen.',
      },
    ],
    steps: {
      title: 'Checkliste für Remote-Arbeit',
      items: [
        'FollowNet auf dem iPhone installieren und anmelden.',
        'Einstellungen → Automatisch verbinden → Nur WLAN.',
        'Die FollowNet-Erweiterung für Chrome am Laptop mit derselben E-Mail hinzufügen.',
        'Vor Anrufen den Speed Test starten und bei hohem Jitter einen nahen Server wählen.',
        'Für interne Systeme die VPN-Richtlinie des Arbeitgebers befolgen.',
      ],
    },
    bullets: [
      'Verschlüsselt Mail, Chat, Dokumente und Anrufe in öffentlichen Netzen',
      'Das Firmen-VPN nutzen, wenn die Richtlinie es verlangt',
      '„Nur WLAN“ erspart das Dran-Denken',
      'Vor wichtigen Anrufen auf Latenz und Jitter achten',
      'Ein Konto für iPhone und Chrome; Premium deckt fünf Geräte ab',
    ],
    cta: CTA,
    faq: [
      { q: 'Kann ich FollowNet zusammen mit dem Firmen-VPN nutzen?', a: 'iOS betreibt jeweils ein VPN. Nutzen Sie das Firmen-VPN für interne Systeme und sonst FollowNet.' },
      { q: 'Verschlechtert ein VPN Videoanrufe?', a: 'Es fügt etwas Latenz hinzu. Ein naher Server hält sie minimal; der Speed Test zeigt den echten Effekt.' },
      { q: 'Schützt FollowNet Slack oder Zoom am Laptop?', a: 'Die Chrome-Erweiterung deckt nur Browser-Tabs ab. Auf dem iPhone schützt die App jede App, auch Slack und Zoom.' },
      { q: 'Sieht FollowNet meine Arbeitsdaten?', a: 'Verkehr in HTTPS bleibt Ende-zu-Ende verschlüsselt. Was FollowNet verarbeitet, steht in der Datenschutzerklärung.' },
    ],
  },

  'wireguard-vs-ikev2': {
    h1: 'WireGuard oder IKEv2 auf dem iPhone: welches VPN-Protokoll nehmen?',
    lead:
      'WireGuard und IKEv2 sind die zwei verbreitetsten VPN-Protokolle unter iOS, und FollowNet unterstützt beide. Praktisch sind sie gleich sicher; der Unterschied liegt im Tempo, im Verhalten beim Netzwechsel und darin, wie leicht Netze sie erkennen.',
    sections: [
      {
        title: 'WireGuard kurz erklärt',
        body:
          'WireGuard ist ein modernes Protokoll mit kleiner, prüfbarer Codebasis und aktueller Kryptografie. Es verbindet sich schnell, hat wenig Overhead und ist in stabilen Heim- und Büronetzen meist die schnellste Option. Weil sein Verkehr ein erkennbares Muster hat, drosseln oder blockieren manche Netze es.',
      },
      {
        title: 'IKEv2 kurz erklärt',
        body:
          'IKEv2 ist ein etablierter Standard mit nativer Unterstützung in iOS. Seine Stärke ist Mobilität: Wenn Sie vom WLAN ins LTE wechseln oder durch Gebiete mit lückenhafter Abdeckung fahren, setzt es den Tunnel sanft fort. Es ist etwas schwerer als WireGuard und kann in restriktiven Netzen ebenfalls blockiert werden.',
      },
      {
        title: 'Tempo',
        body:
          'In einem ruhigen Netz ist WireGuard meist etwas schneller und hat weniger Latenz. Der Unterschied ist oft klein im Vergleich zur Serverentfernung. Messen Sie selbst: Verbinden Sie sich mit jedem Protokoll zum selben Server und starten Sie zweimal den Speed Test.',
        image: 'speedtest',
        imageCaption: 'Protokolle auf demselben Server mit dem Speed Test vergleichen.',
      },
      {
        title: 'Netzwechsel',
        body:
          'Wenn Sie pendeln, reisen oder viel unterwegs sind, merkt man das Wiederverbindungsverhalten von IKEv2 – weniger Hänger, wenn das Telefon zwischen Netzen wechselt. Deshalb nutzt das Profil Travel in FollowNet standardmäßig IKEv2.',
      },
      {
        title: 'Wenn keines funktioniert',
        body:
          'Manche Netze stören beide. Dann nutzen Sie Smart Connect: Es weicht auf AmneziaWG (eine WireGuard-Variante mit verändertem Verkehrsmuster), Hysteria2 (über QUIC, gut bei Paketverlust) oder VLESS Reality (sieht wie gewöhnliches HTTPS aus) aus. Das Profil Restricted hält diese Kette standardmäßig aktiv.',
        image: 'protocol',
        imageCaption: 'WireGuard oder IKEv2 manuell wählen oder Smart anlassen.',
      },
    ],
    table: {
      title: 'WireGuard und IKEv2',
      head: ['', 'WireGuard', 'IKEv2'],
      rows: [
        ['Tempo in stabilen Netzen', 'Meist am schnellsten', 'Schnell, etwas mehr Overhead'],
        ['Wechsel WLAN ↔ LTE', 'Gut', 'Sehr gut, setzt sanft fort'],
        ['Verbindungsaufbau', 'Sehr schnell', 'Schnell'],
        ['Blockiert in restriktiven Netzen', 'Manchmal', 'Manchmal'],
        ['FollowNet-Profil', 'Public Wi‑Fi', 'Travel'],
      ],
    },
    steps: {
      title: 'In zwei Minuten das passende finden',
      items: [
        'Mit WireGuard zu einem nahen Server verbinden und den Speed Test starten.',
        'Auf IKEv2 am selben Server wechseln und erneut testen.',
        'Sind Sie meist am selben Ort, das schnellere behalten.',
        'Sind Sie viel unterwegs, IKEv2 oder das Profil Travel bevorzugen.',
        'Verbindet keines, zurück zu Smart und ausweichen lassen.',
      ],
    },
    bullets: [
      'Beide sind sicher; der Unterschied ist Tempo und Mobilität',
      'WireGuard: am schnellsten in stabilen Netzen',
      'IKEv2: am besten beim Wechsel zwischen WLAN und LTE',
      'Smart Connect weicht auf AmneziaWG, Hysteria2 oder VLESS Reality aus',
      'Im eigenen Netz mit dem Speed Test messen',
    ],
    cta: CTA,
    faq: [
      { q: 'Welches ist sicherer?', a: 'Beide nutzen bei korrekter Umsetzung starke moderne Kryptografie. Wählen Sie nach Tempo und Mobilität, nicht nach Sicherheit.' },
      { q: 'Welches verbraucht weniger Akku?', a: 'WireGuard ist meist etwas sparsamer, im Alltag ist der Unterschied aber gering.' },
      { q: 'Kann FollowNet für mich wählen?', a: 'Ja. Smart Connect wählt das Protokoll je Netz und wechselt, wenn eines ausfällt.' },
      { q: 'Sind beide in Free verfügbar?', a: 'Die Verfügbarkeit richtet sich nach Ihrem Tarif in der App; die Kernprotokolle gibt es in Free im Rahmen des Wochenvolumens.' },
    ],
  },

  'what-is-kill-switch-vpn': {
    h1: 'Was ist ein VPN-Kill-Switch und wie funktioniert er auf iPhone und in Chrome?',
    lead:
      'Ein Kill Switch ist ein Sicherheitsnetz: Bricht die VPN-Verbindung ab, verhindert er, dass Verkehr ungeschützt weiterfließt. Wie das funktioniert, hängt von der Plattform ab. Hier steht, was das auf dem iPhone und in der FollowNet-Erweiterung für Chrome bedeutet und wie Sie alles so einrichten, dass ein Abbruch Sie nicht bloßstellt.',
    sections: [
      {
        title: 'Welches Problem ein Kill Switch löst',
        body:
          'VPN-Verbindungen können abbrechen – schwaches Signal, Netzwechsel, Serverneustart. Für einige Sekunden senden Apps dann womöglich Verkehr außerhalb des Tunnels über das lokale Netz. In einem Hotspot, dem Sie nicht trauen, ist genau das zu vermeiden. Ein Kill Switch blockiert den Verkehr, bis der Tunnel wieder steht.',
      },
      {
        title: 'Am Computer: der Kill Switch in Chrome',
        body:
          'Die FollowNet-Erweiterung für Chrome enthält einen Browser-Kill-Switch. Ist er aktiv, lädt Chrome keine Seiten mehr, wenn die Proxy-Verbindung ausfällt, statt still auf eine direkte Verbindung zurückzufallen. Er gilt nur für Chrome: Andere Browser und Desktop-Apps sind nicht betroffen.',
      },
      {
        title: 'Auf dem iPhone: wie iOS damit umgeht',
        body:
          'iOS verwaltet VPN-Tunnel auf Systemebene über Network Extension. FollowNet stützt sich auf dieses Systemverhalten und Regeln für automatisches Verbinden, um den Tunnel schnell zurückzuholen: Mit „Immer“ startet das VPN in jedem Netz automatisch neu. Einen Zauberschalter, der in jedem iOS-Sonderfall null Pakete garantiert, versprechen wir nicht – das kann kein ehrliches iOS-VPN.',
        image: 'autoconnect',
        imageCaption: '„Immer“ startet das VPN in jedem Netz neu.',
      },
      {
        title: 'Einstellungen gegen Leaks auf dem iPhone',
        body:
          'Nutzen Sie in unsicheren Netzen „Immer“. Lassen Sie das Protokoll auf Smart, damit ein ausfallendes Protokoll ersetzt wird, statt Sie ungeschützt zu lassen. In schwierigen Netzen wenden Sie das Profil Restricted an, das Smart Connect mit „Immer“ und dem schnellsten Server kombiniert. Ein Widget auf dem Home-Bildschirm zeigt auf einen Blick, ob Sie geschützt sind.',
      },
      {
        title: 'Was ein Kill Switch nicht kann',
        body:
          'Er verhindert keine Leaks, die Sie selbst verursachen – Anmeldungen, geteilter Standort, installierte Tracking-Apps. Er hält Sie auch nicht in einem kaputten Netz online; er verhindert nur, dass Verkehr ungeschützt rausgeht, während das VPN neu verbindet.',
      },
    ],
    table: {
      title: 'Kill-Switch-Verhalten je Plattform',
      head: ['', 'FollowNet iOS', 'FollowNet Chrome'],
      rows: [
        ['Umfang', 'Ganzes Gerät, solange verbunden', 'Chrome-Tabs'],
        ['Mechanismus', 'iOS Network Extension + automatisches Verbinden', 'Kill-Switch-Einstellung im Browser'],
        ['Wenn die Verbindung abbricht', 'Automatisches Verbinden baut den Tunnel neu auf', 'Chrome lädt keine Seiten mehr'],
        ['Empfohlene Einstellung', '„Immer“ oder Profil Restricted', 'Kill Switch an'],
      ],
    },
    steps: {
      title: 'Den Schutz aktivieren',
      items: [
        'iPhone: Einstellungen → Automatisch verbinden → Immer.',
        'iPhone: Protokoll auf Smart lassen oder Profil Restricted anwenden.',
        'Chrome: Einstellungen der FollowNet-Erweiterung öffnen und Kill Switch aktivieren.',
        'Das FollowNet-Widget zum Home-Bildschirm hinzufügen, um den Status zu sehen.',
      ],
    },
    bullets: [
      'Ein Kill Switch blockiert Verkehr, wenn das VPN abbricht',
      'Chrome-Erweiterung: eigener Browser-Kill-Switch',
      'iPhone: iOS Network Extension plus „Immer“',
      'Smart Connect ersetzt ein ausfallendes Protokoll automatisch',
      'Kein Kill Switch schützt vor eigenen Anmeldungen und Apps',
    ],
    cta: CTA,
    faq: [
      { q: 'Hat FollowNet einen Kill Switch auf dem iPhone?', a: 'FollowNet nutzt die VPN-Verwaltung von iOS mit automatischem Verbinden, um den Tunnel wiederherzustellen; den ausdrücklichen Kill-Switch-Schalter gibt es in der Chrome-Erweiterung.' },
      { q: 'Blockiert ein Kill Switch mein Internet komplett?', a: 'Nur solange das VPN neu verbindet. Ist das Netz selbst ausgefallen, sind Sie ohnehin offline.' },
      { q: 'Sollte ich immer einen Kill Switch nutzen?', a: 'In unsicheren Netzen ja. Zu Hause ist er optional.' },
      { q: 'Wirkt der Chrome-Kill-Switch auf andere Browser?', a: 'Nein, nur auf Chrome mit der FollowNet-Erweiterung.' },
    ],
  },

  'vpn-not-connecting-iphone': {
    h1: 'VPN verbindet sich nicht auf dem iPhone? Lösung Schritt für Schritt',
    lead:
      'Wenn ein VPN nicht verbindet, ist die Ursache fast immer eine von fünf: die iOS-Berechtigung, eine WLAN-Anmeldeseite, das Datenlimit, ein Netz, das das Protokoll blockiert, oder ein vorübergehender Fehler. Gehen Sie die Liste der Reihe nach durch – die meisten Probleme sind nach den ersten drei Schritten gelöst.',
    sections: [
      {
        title: '1. Die iOS-VPN-Berechtigung prüfen',
        body:
          'Haben Sie bei der iOS-Abfrage „Nicht erlauben“ getippt oder wurde die VPN-Konfiguration entfernt, kann FollowNet den Tunnel nicht starten. Öffnen Sie FollowNet und tippen Sie erneut auf Verbinden – iOS fragt noch einmal. In den iOS-Einstellungen → VPN sehen Sie, ob die FollowNet-Konfiguration vorhanden ist.',
      },
      {
        title: '2. Eine WLAN-Anmeldeseite erledigen',
        body:
          'Hotels, Flughäfen, Züge und manche Cafés verlangen eine Anmeldung im Captive Portal, bevor das Internet funktioniert. Trennen Sie das VPN, öffnen Sie Safari, erledigen Sie die Seite, prüfen Sie, ob eine normale Website lädt, und verbinden Sie erneut.',
      },
      {
        title: '3. Das Datenvolumen prüfen',
        body:
          'Im Free-Tarif pausieren neue Verbindungen, wenn das Wochenvolumen aufgebraucht ist. Öffnen Sie die Statistik, um den Rest zu sehen. Warten Sie auf die wöchentliche Erneuerung oder wechseln Sie zu Premium mit unbegrenztem Volumen.',
        image: 'stats',
        imageCaption: 'Die Statistik zeigt Wochenlimit und Verbrauch.',
      },
      {
        title: '4. Smart Connect das Netz überlassen',
        body:
          'Manche Netze blockieren oder bremsen bestimmte Protokolle. Stellen Sie das Protokoll auf Smart, damit FollowNet automatisch ausweichen kann. Klappt es weiterhin nicht, wenden Sie das Profil Restricted an oder versuchen manuell AmneziaWG, Hysteria2 oder VLESS Reality. Probieren Sie auch einen anderen Server – ein Standort kann ausgelastet oder kurz nicht erreichbar sein.',
        image: 'protocol',
        imageCaption: 'Einstellungen → VPN-Protokoll: Smart ist die robusteste Wahl.',
      },
      {
        title: '5. Einen Aussetzer ausschließen',
        body:
          'Flugmodus ein- und ausschalten, das WLAN vergessen und neu verbinden oder auf mobile Daten wechseln, um zu sehen, ob das Netz das Problem ist. Prüfen Sie, ob FollowNet und iOS aktuell sind. Als letzter Schritt die VPN-Konfiguration in den iOS-Einstellungen → VPN entfernen und in FollowNet erneut verbinden, um sie neu anzulegen.',
      },
      {
        title: 'Verbunden, aber nichts lädt',
        body:
          'Zeigt FollowNet „Verbunden“, aber Seiten laden nicht, stört das Netz vermutlich das Protokoll. Wechseln Sie Protokoll oder Server und starten Sie den Speed Test, um zu prüfen, ob Verkehr durchgeht. FollowNet prüft echten Verkehr, bevor eine Sitzung als gesund gilt, doch Netze können sich mitten in der Sitzung ändern.',
      },
    ],
    steps: {
      title: 'Schnelle Checkliste',
      items: [
        'Auf Verbinden tippen und die VPN-Konfiguration erlauben, wenn iOS fragt.',
        'Trennen, die WLAN-Anmeldeseite in Safari erledigen, neu verbinden.',
        'Restvolumen in der Statistik prüfen (Free-Tarif).',
        'Protokoll auf Smart stellen oder Profil Restricted anwenden.',
        'Einen anderen Server wählen.',
        'Flugmodus umschalten oder auf mobile Daten wechseln, um das Netz zu testen.',
        'FollowNet und iOS aktualisieren; die VPN-Konfiguration bei Bedarf neu anlegen.',
      ],
    },
    table: {
      title: 'Symptom und wahrscheinliche Ursache',
      head: ['Symptom', 'Wahrscheinliche Ursache', 'Lösung'],
      rows: [
        ['Verbinden tut nichts', 'VPN-Berechtigung fehlt', 'iOS-Abfrage erlauben'],
        ['Geht über LTE, nicht im WLAN', 'Captive Portal oder blockiertes Protokoll', 'Anmelden; Smart oder Restricted nutzen'],
        ['Mitten in der Woche ausgefallen', 'Free-Volumen verbraucht', 'Erneuerung abwarten oder upgraden'],
        ['Verbunden, aber keine Seiten', 'Protokoll wird gestört', 'Protokoll oder Server wechseln'],
        ['Geht nirgends', 'Vorübergehender Fehler', 'Flugmodus, Update, Konfiguration neu anlegen'],
      ],
    },
    bullets: [
      'Meist: Berechtigung, Anmeldeseite oder Datenlimit',
      'Smart Connect und Profil Restricted meistern schwierige Netze',
      'Einen anderen Server versuchen, bevor man die App für kaputt hält',
      'Mit mobilen Daten testen, um Netz- von App-Problemen zu trennen',
      'Die VPN-Konfiguration neu anzulegen behebt seltene iOS-Fehler',
    ],
    cta: CTA,
    faq: [
      { q: 'Warum geht das VPN über LTE, aber nicht im WLAN?', a: 'Das WLAN braucht vermutlich eine Anmeldung oder blockiert das Protokoll. Anmelden und Smart Connect nutzen.' },
      { q: 'Ich habe versehentlich „Nicht erlauben“ getippt. Was nun?', a: 'Tippen Sie in FollowNet erneut auf Verbinden; iOS zeigt die Abfrage nochmals.' },
      { q: 'Hilft eine Neuinstallation?', a: 'Selten nötig. Die VPN-Konfiguration über iOS-Einstellungen → VPN neu anzulegen erledigt meist dasselbe.' },
      { q: 'An wen wende ich mich, wenn nichts hilft?', a: 'Schreiben Sie an support@follow-net.com mit Netztyp, Protokoll und Uhrzeit des Problems.' },
    ],
  },

  'vpn-slow-iphone': {
    h1: 'VPN langsam auf dem iPhone? Ursache finden und beschleunigen',
    lead:
      'Etwas langsamer mit VPN ist normal, viel langsamer nicht. Der Trick: erst messen, dann ändern. Dieser Ratgeber zeigt, wie Sie herausfinden, ob Netz, Server oder Protokoll bremst – und was jeweils hilft.',
    sections: [
      {
        title: 'Zuerst messen',
        body:
          'Trennen Sie das VPN und machen Sie einen Geschwindigkeitstest als Ausgangswert. Verbinden Sie dann FollowNet und starten Sie den eingebauten Speed Test im selben Netz. Vergleichen Sie Download, Upload, Latenz und Jitter. Ist schon der Ausgangswert langsam, liegt es am Netz, nicht am VPN.',
        image: 'speedtest',
        imageCaption: 'FollowNet Speed Test: Download, Upload, Latenz, Jitter und Verlust.',
      },
      {
        title: 'Die Serverentfernung zählt am meisten',
        body:
          'Jede zusätzliche tausend Kilometer bringen Latenz. Ein Server auf einem anderen Kontinent macht aus einer schnellen Leitung eine träge. Nutzen Sie „Optimaler Standort“ oder wählen Sie den nächsten Server mit dem niedrigsten Ping. Ferne Server nur, wenn Sie genau diese Region brauchen.',
        image: 'servers',
        imageCaption: 'Der Ping neben jedem Standort hilft, einen nahen, schnellen Server zu wählen.',
      },
      {
        title: 'Ein anderes Protokoll versuchen',
        body:
          'In stabilen Netzen ist WireGuard meist am schnellsten. Drosselt das Netz VPN-Verkehr, kann WireGuard kriechen, während AmneziaWG, Hysteria2 oder VLESS Reality besser laufen. Smart Connect erledigt das automatisch; zum manuellen Vergleich das Protokoll in den Einstellungen wechseln und am selben Server erneut testen.',
      },
      {
        title: 'Stoßzeiten und volle Netze',
        body:
          'Abends in Hotels, Zügen und Flughäfen teilen sich alle die Bandbreite. Schwaches Mobilfunksignal begrenzt das Tempo auch ohne VPN. Zeigt der Test hohen Paketverlust, liegt es an der Funkverbindung – näher an den Router oder ans Fenster gehen oder zwischen WLAN und LTE wechseln.',
      },
      {
        title: 'Anrufe und Spiele: auf Jitter achten',
        body:
          'Für Videoanrufe und Online-Spiele zählen Latenz und Jitter mehr als der Download. Eine 200-Mbit/s-Leitung mit hohem Jitter ruckelt trotzdem. Wählen Sie den nächsten Server und in stabilen Netzen WireGuard.',
      },
      {
        title: 'Wenn Ausschalten die Antwort ist',
        body:
          'Bei schwachem LTE oder in einem vertrauenswürdigen Heimnetz ist manchmal kein VPN am schnellsten. Das ist Physik: Verschlüsselung und der Umweg über einen Server kosten immer etwas. „Nur WLAN“ gibt Ihnen Schutz in Hotspots, ohne die mobilen Daten zu beeinflussen.',
      },
    ],
    steps: {
      title: 'Fehlersuche in der richtigen Reihenfolge',
      items: [
        'Geschwindigkeitstest ohne VPN als Ausgangswert.',
        'Verbinden und den FollowNet Speed Test im selben Netz starten.',
        'Auf „Optimaler Standort“ oder den nächsten Server mit niedrigem Ping wechseln.',
        'WireGuard und Smart Connect am selben Server vergleichen.',
        'Bei hohem Verlust das Signal verbessern oder zwischen WLAN und LTE wechseln.',
        'Bei überlastetem Netz zu einer ruhigeren Zeit erneut testen.',
      ],
    },
    table: {
      title: 'Was die Werte bedeuten',
      head: ['Ergebnis', 'Bedeutung', 'Maßnahme'],
      rows: [
        ['Schon ohne VPN langsam', 'Das Netz bremst', 'Netz wechseln oder warten'],
        ['Hohe Latenz nur mit VPN', 'Server zu weit weg', 'Näheren Server wählen'],
        ['Download fällt mit VPN stark ab', 'Protokoll wird gedrosselt', 'Smart oder anderes Protokoll'],
        ['Hoher Jitter oder Verlust', 'Instabile Funkverbindung', 'Signal verbessern, WLAN/LTE wechseln'],
      ],
    },
    bullets: [
      'Immer mit einem Ausgangswert ohne VPN vergleichen',
      'Die Serverentfernung ist der größte Faktor',
      'Gedrosselte Netze bevorzugen AmneziaWG, Hysteria2 oder VLESS Reality',
      'Für Anrufe und Spiele zählt Jitter mehr als Mbit/s',
      'Etwas Overhead ist normal und unvermeidlich',
    ],
    cta: CTA,
    faq: [
      { q: 'Wie viel langsamer sollte ein VPN sein?', a: 'Mit nahem Server oft nur wenig. Ferne Server und überlastete Netze vergrößern den Unterschied.' },
      { q: 'Ist Premium schneller als Free?', a: 'Die Verschlüsselung ist gleich. Premium bietet mehr Standorte und damit eher einen näheren oder weniger ausgelasteten Server.' },
      { q: 'Verbraucht der Speed Test Volumen?', a: 'Ja, er lädt Daten herunter und hoch. In Free nicht wiederholt starten.' },
      { q: 'Warum ist das VPN zu Hause schnell, im Café langsam?', a: 'Das Café-Netz ist langsamer oder drosselt VPN-Verkehr. Smart Connect und einen nahen Server versuchen.' },
    ],
  },

  'captive-portal-vpn-iphone': {
    h1: 'Captive Portals und VPN auf dem iPhone: WLAN in Hotel, Flughafen und Zug',
    lead:
      'Ein Captive Portal ist die Anmeldeseite, die manche WLANs zeigen, bevor sie Sie ins Internet lassen. Es ist der häufigste Grund, warum ein VPN im öffentlichen WLAN „nicht funktioniert“. Hier steht, warum – und die einfache Reihenfolge, die das Problem vermeidet.',
    sections: [
      {
        title: 'Was ein Captive Portal ist',
        body:
          'Hotels, Flughäfen, Züge, Cafés und Veranstaltungsorte fangen oft Ihre erste Webanfrage ab und zeigen eine Seite: Zimmernummer eingeben, Bedingungen akzeptieren, Werbung ansehen oder E-Mail angeben. Bis Sie sie erledigt haben, blockiert das Netz normalen Internetzugang. iOS erkennt das meist und öffnet automatisch ein kleines Anmeldefenster.',
      },
      {
        title: 'Warum es mit dem VPN kollidiert',
        body:
          'Ein VPN will alles durch einen verschlüsselten Tunnel zu seinem Server schicken. Doch bevor das Portal erledigt ist, blockiert das Netz genau diese Verbindung. Ergebnis: Das VPN scheint nicht zu verbinden oder verbindet, lädt aber nichts. Nichts ist kaputt – das Netz hat Sie nur noch nicht hereingelassen.',
      },
      {
        title: 'Die richtige Reihenfolge',
        body:
          'Mit ausgeschaltetem VPN dem Netz beitreten, das Portal im iOS-Fenster oder in Safari erledigen, prüfen, ob eine normale Website lädt, und erst dann FollowNet verbinden. Mit automatischem Verbinden im WLAN startet das VPN, sobald das Netz nutzbar ist.',
        image: 'autoconnect',
        imageCaption: 'Automatisch verbinden startet das VPN im WLAN, sobald das Netz nutzbar ist.',
      },
      {
        title: 'Wenn das Portal nicht erscheint',
        body:
          'Manchmal öffnet iOS das Anmeldefenster nicht. Öffnen Sie Safari und rufen Sie eine einfache http-Adresse auf (zum Beispiel neverssl.com) – das Netz leitet Sie zum Portal um. Lief das VPN schon, trennen Sie es zuerst.',
      },
      {
        title: 'Portale, die Sie abmelden',
        body:
          'Viele Netze verlangen nach einigen Stunden oder jeden Tag eine neue Anmeldung. Leitet das VPN im Hotel plötzlich keinen Verkehr mehr, prüfen Sie, ob das Portal zurück ist. Erneut anmelden und neu verbinden. Das ist die Regel des Netzes, kein VPN-Ausfall.',
      },
      {
        title: 'Zeit sparen in bekannten Netzen',
        body:
          'Für ein Hotel oder eine Bahngesellschaft, die Sie oft nutzen, speichern Sie ein eigenes Netzwerkprofil mit Protokoll, DNS und Server, die dort funktionieren. Nach dem Portal genügt ein Tipp.',
      },
    ],
    steps: {
      title: 'Ablauf mit Captive Portal',
      items: [
        'Sicherstellen, dass FollowNet getrennt ist.',
        'Dem WLAN beitreten.',
        'Die Anmeldeseite erledigen (iOS-Fenster oder Safari).',
        'Eine normale Website öffnen, um den Zugang zu prüfen.',
        'FollowNet verbinden oder das automatische Verbinden machen lassen.',
        'Stoppt der Verkehr später, prüfen, ob das Portal eine neue Anmeldung will.',
      ],
    },
    bullets: [
      'Portale müssen vor dem VPN erledigt werden',
      'Das VPN erst verbinden, wenn eine normale Seite lädt',
      'neverssl.com hilft, ein verstecktes Portal aufzurufen',
      'Manche Netze verlangen täglich eine neue Anmeldung',
      'Für häufig genutzte Netze ein Profil speichern',
    ],
    cta: CTA,
    faq: [
      { q: 'Warum erscheint die Anmeldeseite nicht?', a: 'Das VPN oder eine gespeicherte Verbindung blockiert sie womöglich. VPN trennen und in Safari eine einfache http-Seite öffnen.' },
      { q: 'Ist die Portalseite selbst sicher?', a: 'Sie läuft, bevor das VPN aktiv ist; geben Sie dort nichts Sensibles ein außer dem, was das Netz verlangt.' },
      { q: 'Kann FollowNet nach dem Portal automatisch verbinden?', a: 'Ja, mit „Nur WLAN“ oder „Immer“ startet es, sobald das Netz Verkehr erlaubt.' },
      { q: 'Gestern ging das VPN im Hotel, heute nicht – warum?', a: 'Vermutlich ist die Portal-Anmeldung abgelaufen. Erneut anmelden, dann neu verbinden.' },
    ],
  },

  'vless-reality-ios': {
    h1: 'VLESS Reality auf dem iPhone: was es ist und wann FollowNet es nutzt',
    lead:
      'VLESS Reality ist ein neuerer VPN-Transport, der wie gewöhnlicher verschlüsselter Webverkehr aussieht. FollowNet bietet ihn neben WireGuard, IKEv2, AmneziaWG und Hysteria2. Dieser Ratgeber erklärt, was er anders macht, wann er hilft und warum er nicht immer die schnellste Wahl ist.',
    sections: [
      {
        title: 'Was VLESS Reality ist',
        body:
          'VLESS ist ein schlankes Transportprotokoll; Reality ist eine Technik, durch die die Verbindung einer normalen TLS-Sitzung (HTTPS) mit einer echten Website ähnelt. Für ein Netz, das Verkehrsmuster untersucht, sieht die Verbindung eher nach gewöhnlichem Surfen aus als nach einem typischen VPN-Tunnel.',
      },
      {
        title: 'Warum es das gibt',
        body:
          'Manche Netze erkennen und bremsen klassische VPN-Protokolle wie WireGuard oder IKEv2 – manchmal sogar modifizierte. Dann zeigt ein Tunnel womöglich „Verbunden“, lässt aber kaum Verkehr durch. Ein Transport, der sich in normalen Webverkehr einfügt, bietet einen weiteren Weg, wenn die üblichen stocken.',
      },
      {
        title: 'Wie FollowNet es nutzt',
        body:
          'Mit dem Protokoll Smart entscheidet FollowNet anhand von Netzkontext und Ausweichstufen, wann sich VLESS Reality lohnt. Sie können es auch manuell unter Einstellungen → VPN-Protokoll wählen oder das Profil Restricted anwenden, das die volle Ausweichkette von Smart Connect aktiv hält. FollowNet prüft, ob echter Verkehr durchgeht, bevor eine Sitzung als gesund gilt.',
        image: 'protocol',
        imageCaption: 'Einstellungen → VPN-Protokoll: Smart kann VLESS Reality bei Bedarf nutzen.',
      },
      {
        title: 'Wann man es nicht nutzt',
        body:
          'In einem ruhigen Heimnetz ist VLESS Reality selten am schnellsten – bei Tempo und Latenz gewinnt meist WireGuard. Nutzen Sie VLESS Reality, wenn andere Protokolle scheitern oder schlecht laufen, nicht als Standard überall. Die Verfügbarkeit hängt außerdem von den Servern ab, die es in Ihrem Tarif unterstützen.',
      },
      {
        title: 'Prüfen, ob es wirklich hilft',
        body:
          'Laden Sie nach dem Wechsel einige echte Seiten und starten Sie den Speed Test, statt nur der Statusfarbe zu trauen. Vergleichen Sie mit Smart und WireGuard am selben Server. Ist VLESS Reality in einem bestimmten Netz klar besser, speichern Sie es in einem eigenen Netzwerkprofil für diesen Ort.',
        image: 'speedtest',
        imageCaption: 'Mit dem Speed Test prüfen, dass wirklich Verkehr durchgeht.',
      },
    ],
    table: {
      title: 'Wo VLESS Reality hinpasst',
      head: ['Protokoll', 'Stärke', 'Am besten für'],
      rows: [
        ['WireGuard', 'Tempo, niedrige Latenz', 'Stabile Heim- und Büronetze'],
        ['IKEv2', 'Sanftes Wiederverbinden', 'Wechsel zwischen WLAN und LTE'],
        ['AmneziaWG', 'WireGuard mit verändertem Muster', 'Netze, die WireGuard bremsen'],
        ['Hysteria2', 'Kommt mit Paketverlust zurecht', 'Verlustreiche oder volle Leitungen'],
        ['VLESS Reality', 'Ähnelt gewöhnlichem HTTPS', 'Wenn andere Protokolle stocken'],
      ],
    },
    steps: {
      title: 'VLESS Reality nutzen',
      items: [
        'Protokoll auf Smart lassen und FollowNet entscheiden lassen, oder',
        'das Netzwerkprofil Restricted für schwierige Netze anwenden, oder',
        'VLESS Reality manuell unter Einstellungen → VPN-Protokoll wählen.',
        'Echte Seiten laden und den Speed Test starten, um den Nutzen zu prüfen.',
        'Für Netze, in denen es am besten läuft, ein eigenes Profil speichern.',
      ],
    },
    bullets: [
      'Ähnelt gewöhnlichem verschlüsseltem Webverkehr',
      'Nützlich, wenn klassische Protokolle gebremst werden oder stocken',
      'Smart Connect und Profil Restricted nutzen es automatisch',
      'In ruhigen Netzen nicht am schnellsten – meist gewinnt WireGuard',
      'Immer mit echten Seiten und Speed Test prüfen',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist VLESS Reality sicherer als WireGuard?', a: 'Beide verschlüsseln Ihren Verkehr. VLESS Reality unterscheidet sich darin, wie die Verbindung im Netz aussieht, nicht darin, „sicherer“ zu sein.' },
      { q: 'Sollte ich es immer nutzen?', a: 'Nein. Nutzen Sie Smart und lassen Sie VLESS Reality einspringen, wenn andere Protokolle Mühe haben.' },
      { q: 'Ist VLESS Reality in Free verfügbar?', a: 'Die Verfügbarkeit hängt von den Servern und Ihrem Tarif ab, wie in der App angezeigt.' },
      { q: 'Garantiert es überall Zugang?', a: 'Das kann kein Protokoll. Es verbessert die Chancen in schwierigen Netzen und ist im Einklang mit lokalen Gesetzen zu nutzen.' },
    ],
  },

  'vpn-free-weekly-limit': {
    h1: 'FollowNet Free: So funktioniert das wöchentliche Datenvolumen',
    lead:
      'FollowNet Free ist ein vollwertiges VPN mit einer ehrlichen Grenze: einem wöchentlichen Datenvolumen, das in der App angezeigt wird. Hier steht, was zählt, wann es sich erneuert, wie es länger reicht und was passiert, wenn es aufgebraucht ist.',
    sections: [
      {
        title: 'Wöchentlich, nicht täglich',
        body:
          'Das Free-Volumen wird pro Woche gezählt – das passt besser zum Alltag als ein Tageslimit: Ein Reisetag darf mehr verbrauchen, ein ruhiger Tag weniger. Das aktuelle Volumen und Ihr Verbrauch stehen in der App. Genaue Werte können sich mit den Tarifeinstellungen ändern, maßgeblich ist deshalb immer der Zähler in der App.',
        image: 'stats',
        imageCaption: 'Statistik: Verbrauch dieser Woche und Wochenlimit.',
      },
      {
        title: 'Was zählt',
        body:
          'Aller Verkehr durch den VPN-Tunnel zählt – Surfen, Video, Musik, App-Updates, Cloud-Backups und der eingebaute Speed Test. Verkehr bei ausgeschaltetem VPN zählt nicht. Die Verbindungsprüfungen von Smart Connect sind winzig, aber echt.',
      },
      {
        title: 'Damit es länger reicht',
        body:
          'Video verbraucht am meisten, also laden Sie Filme und Serien vor Reisen über ein vertrauenswürdiges Netz herunter. Nutzen Sie „Nur WLAN“, damit das VPN in Hotspots läuft, wo es am wichtigsten ist, aber nicht bei mobilen Daten zu Hause. Pausieren Sie iCloud-Fotos-Uploads und große App-Updates bei aktivem VPN und starten Sie den Speed Test nur bei Bedarf.',
        image: 'autoconnect',
        imageCaption: '„Nur WLAN“ setzt das Free-Volumen gezielt in öffentlichen Hotspots ein.',
      },
      {
        title: 'Was Free enthält',
        body:
          'Free ist keine abgespeckte Demo. Sie erhalten dieselben Protokolle, Smart Connect, DNS-Vorlagen, Netzwerkprofile, automatisches Verbinden, Widgets und den Speed Test wie in Premium, dazu die Free-Standorte. Der Wochenzähler ist der Hauptunterschied.',
      },
      {
        title: 'Wenn das Limit erreicht ist',
        body:
          'Neue Verbindungen pausieren bis zur wöchentlichen Erneuerung, und Widgets zeigen das verbrauchte Volumen statt eines irreführenden „Verbunden“. Sie können die Erneuerung abwarten oder zu Premium wechseln – unbegrenztes Volumen, mehr Standorte und bis zu fünf Geräte.',
      },
    ],
    table: {
      title: 'Was am meisten Volumen braucht',
      head: ['Aktivität', 'Verbrauch', 'Tipp'],
      rows: [
        ['HD-Video-Streaming', 'Sehr hoch', 'Vorher herunterladen'],
        ['Videoanrufe', 'Hoch', 'Wenn möglich nur Audio'],
        ['App-Updates und Backups', 'Hoch, stoßweise', 'Im vertrauenswürdigen WLAN ohne VPN laufen lassen'],
        ['Musik-Streaming', 'Mittel', 'Playlists herunterladen'],
        ['Surfen, Mail, Messenger', 'Gering', 'Ideal für Free'],
      ],
    },
    steps: {
      title: 'Das Volumen im Blick behalten',
      items: [
        'In der Statistik verbrauchtes und verbleibendes Volumen ansehen.',
        '„Nur WLAN“ einstellen.',
        'Videos und große Dateien vor Reisen herunterladen.',
        'Wiederholte Speed Tests vermeiden.',
        'Bei regelmäßigem Erreichen des Limits zu Premium wechseln.',
      ],
    },
    bullets: [
      'Ein wöchentliches Volumen, in der App angezeigt',
      'Aller Tunnelverkehr zählt, auch der Speed Test',
      'Dieselben Funktionen wie Premium außer Zähler und Standorten',
      'Video braucht am meisten, Surfen und Messenger sehr wenig',
      'Premium hebt das Limit auf und bringt Standorte und Geräte',
    ],
    cta: CTA,
    faq: [
      { q: 'Wie viel Volumen enthält Free?', a: 'Das aktuelle Wochenvolumen steht in der App. Es kann sich mit den Tarifeinstellungen ändern, prüfen Sie daher die Statistik.' },
      { q: 'Wann erneuert sich das Volumen?', a: 'Wöchentlich. Die App zeigt Ihren Verbrauch der laufenden Woche.' },
      { q: 'Zählt Verkehr ohne VPN?', a: 'Nein. Nur Verkehr durch den FollowNet-Tunnel zählt.' },
      { q: 'Kann ich ohne Abo Volumen nachkaufen?', a: 'Das Limit hebt Premium auf – monatlich oder jährlich.' },
    ],
  },

  'vpn-premium-unlimited': {
    h1: 'FollowNet Premium: unbegrenztes Volumen, mehr Standorte, fünf Geräte',
    lead:
      'Premium ist für Menschen, die täglich ein VPN nutzen. Es hebt das wöchentliche Free-Limit auf, schaltet Premium-Standorte frei, deckt bis zu fünf Geräte ab und entfernt Werbung. Hier steht genau, was sich ändert, was gleich bleibt und wie die Abrechnung funktioniert.',
    sections: [
      {
        title: 'Was Premium hinzufügt',
        body:
          'Unbegrenztes Datenvolumen ohne Wochenlimit, Zugang zu allen Premium-Standorten, ein Abo für bis zu fünf Geräte – iPhone, iPad und die Chrome-Erweiterung – und keine Werbung. Alles, was Sie von Free kennen, bleibt genau gleich.',
        image: 'premium',
        imageCaption: 'Premium: unbegrenztes Volumen, alle Premium-Server, Smart Connect und bis zu fünf Geräte.',
      },
      {
        title: 'Was sich nicht ändert',
        body:
          'Verschlüsselung, Protokolle und Smart Connect sind in Free und Premium identisch. Premium dreht sich um Kapazität und Auswahl, nicht um „mehr Sicherheit“. Erzählt Ihnen jemand, ein Bezahltarif nutze „doppelte Militärverschlüsselung“, ist das Werbung.',
      },
      {
        title: 'Tarife und Abrechnung',
        body:
          'Premium wird über den App Store als Monats- oder Jahresabo verkauft; das Jahresabo ist pro Monat günstiger und enthält eine kurze Gratis-Testphase, die im Zahlungsfenster von Apple angezeigt wird. Apple wickelt die Zahlung ab, und Sie können das Abo jederzeit in Ihren Apple-ID-Einstellungen verwalten oder kündigen.',
      },
      {
        title: 'Premium auf mehreren Geräten',
        body:
          'Melden Sie sich mit derselben E-Mail auf dem iPad und in der Chrome-Erweiterung an oder verknüpfen Sie ein Gerät per QR-Code unter Einstellungen → Weitere Geräte. Bis zu fünf Geräte teilen sich ein Abo. Auf einem neuen iPhone aktivieren Sie Premium über „Käufe wiederherstellen“.',
        image: 'settings',
        imageCaption: 'Einstellungen → Weitere Geräte: ein anderes Telefon oder Chrome per QR-Code verknüpfen.',
      },
      {
        title: 'Wer upgraden sollte',
        body:
          'Upgraden Sie, wenn Sie regelmäßig das Wochenlimit erreichen, unterwegs streamen, remote über öffentliches WLAN arbeiten, einen bestimmten Premium-Standort brauchen oder einen Tarif für die Geräte der ganzen Familie wollen. Reicht Free für gelegentliche Café-Sitzungen, müssen Sie nicht zahlen.',
      },
      {
        title: 'Was Premium nicht versprechen kann',
        body:
          'Kein VPN kann Zugang zu jedem Streaming-Katalog garantieren oder lokale Gesetze aushebeln. Premium bringt mehr Kapazität und Standorte; wie sich einzelne Dienste verhalten, entscheiden diese selbst.',
      },
    ],
    table: {
      title: 'Free und Premium',
      head: ['', 'Free', 'Premium'],
      rows: [
        ['Datenvolumen', 'Wöchentliches Volumen', 'Unbegrenzt'],
        ['Standorte', 'Free-Standorte', 'Free- und Premium-Standorte'],
        ['Geräte', 'Im Rahmen des Free-Volumens', 'Bis zu 5 mit einem Abo'],
        ['Protokolle, Smart Connect, DNS', 'Enthalten', 'Enthalten'],
        ['Werbung', 'In manchen Regionen möglich', 'Keine'],
        ['Abrechnung', '—', 'Monatlich oder jährlich über den App Store'],
      ],
    },
    steps: {
      title: 'Upgraden und Geräte wechseln',
      items: [
        'In der FollowNet-App für iOS den Premium-Bildschirm öffnen.',
        'Monats- oder Jahresabo wählen und mit der Apple-ID bestätigen.',
        'Auf iPad oder in Chrome mit derselben E-Mail anmelden oder den QR-Code scannen.',
        'Auf einem neuen iPhone „Käufe wiederherstellen“ tippen.',
        'Das Abo jederzeit in den Apple-ID-Abonnements verwalten oder kündigen.',
      ],
    },
    bullets: [
      'Unbegrenztes Volumen und alle Premium-Standorte',
      'Bis zu fünf Geräte mit einem Abo',
      'Keine Werbung',
      'Dieselbe Verschlüsselung und dieselben Protokolle wie Free',
      'Abrechnung und Kündigung über den App Store',
    ],
    cta: CTA,
    faq: [
      { q: 'Kann ich Premium vor dem Bezahlen testen?', a: 'Das Jahresabo enthält eine kurze Gratis-Testphase, die im Zahlungsfenster von Apple vor der Bestätigung angezeigt wird.' },
      { q: 'Wie kündige ich?', a: 'In den iOS-Einstellungen → Ihr Name → Abonnements. Premium bleibt bis zum Ende des bezahlten Zeitraums aktiv.' },
      { q: 'Funktioniert Premium in der Chrome-Erweiterung?', a: 'Ja, mit demselben Konto. Chrome zählt als eines der fünf Geräte.' },
      { q: 'Macht Premium mein VPN schneller?', a: 'Die Verschlüsselung ist gleich, doch mehr Standorte bedeuten eher einen näheren oder weniger ausgelasteten Server.' },
    ],
  },

  'vpn-battery-iphone': {
    h1: 'VPN und iPhone-Akku — was wirklich Strom kostet und wie Sie ihn sparen',
    lead:
      'Ein VPN kostet etwas Akku, meist aber deutlich weniger als vermutet. Den größten Verbrauch verursachen Funkmodul, schwaches Signal und Netze, die den Tunnel ständig abreißen lassen. Dieser Guide zeigt, wie Sie den Einfluss auf Ihrem iPhone messen und FollowNet so einrichten, dass Schutz möglichst wenig Energie kostet.',
    sections: [
      {
        title: 'Wohin die Energie tatsächlich geht',
        body:
          'Verschlüsselung ist auf modernen iPhone-Chips günstig. Strom kosten das aktive WLAN- oder Mobilfunkmodul, der Neuaufbau des Tunnels nach Abbrüchen und Wiederholungen in verlustbehafteten Netzen. Eine stabile WireGuard-Sitzung im guten Heim-WLAN fällt in der Akkustatistik kaum auf; dasselbe Telefon mit schwachem LTE im Zug entlädt sich schneller — mit oder ohne VPN.',
      },
      {
        title: 'Erst die Batterie-Einstellungen prüfen',
        body:
          'Öffnen Sie Einstellungen → Batterie und vergleichen Sie die letzten 24 Stunden und 10 Tage. iOS ordnet VPN-Nutzung oft dem System oder der App zu, die den Verkehr ausgelöst hat. Vergleichen Sie einen Tag mit VPN mit einem ähnlichen Tag ohne, auf denselben Wegen. Ein ungewöhnlicher Tag mit schlechtem Empfang sagt mehr über das Netz als über den Tunnel.',
      },
      {
        title: 'Automatisch verbinden: Hotspots schützen, nicht jede Minute',
        body:
          'Wenn Sie Schutz vor allem in Cafés, Hotels und Flughäfen brauchen, stellen Sie Automatisch verbinden auf „Nur WLAN“. Das VPN startet dann in unbekannten Hotspots und bleibt im Mobilfunk aus, wo das Funkmodul ohnehin der größte Verbraucher ist. „Immer“ lohnt sich, wenn Sie den Tunnel wirklich überall brauchen.',
        image: 'autoconnect',
        imageCaption: 'Automatisch verbinden in FollowNet: „Nur WLAN“ oder „Immer“.',
      },
      {
        title: 'Das Protokoll passend zum Netz wählen',
        body:
          'In ruhigen Netzen ist WireGuard die leichteste Wahl: kurze Handshakes, wenig Overhead und schnelle Erholung nach dem Ruhezustand. In Netzen, die VPN-Verkehr stören, verbraucht ein Tunnel, der sich ständig neu verbindet, weit mehr Energie als ein etwas schwereres Protokoll, das stabil bleibt. Smart Connect wählt für das aktuelle Netz eine funktionierende Option, damit das iPhone keinen Strom mit endlosen Wiederholungen verschwendet.',
        image: 'protocol',
        imageCaption: 'Protokoll-Einstellungen: Smart, WireGuard, IKEv2, AmneziaWG und weitere.',
      },
      {
        title: 'Entfernung und Signal wiegen schwerer als Verschlüsselung',
        body:
          'Mit einem weit entfernten Server dauert derselbe Download länger, und das Funkmodul bleibt länger aktiv. Nutzen Sie „Optimaler Standort“ oder den nächsten Server mit niedrigem Ping. Bei schwachem Mobilfunk kostet jedes Paket mehr Energie; in einem vertrauenswürdigen Netz mit schlechtem Empfang ist es ein vernünftiger Kompromiss, das VPN auszuschalten.',
      },
      {
        title: 'Stromsparmodus und Hintergrundregeln',
        body:
          'Der Stromsparmodus begrenzt Hintergrundaktivität, iOS hält einen aktiven VPN-Tunnel aber aufrecht. Wenn Sie die letzten 10–20 % strecken müssen, trennen Sie in vertrauenswürdigen Netzen und verbinden Sie im öffentlichen WLAN wieder. FollowNet hält keine zusätzlichen Hintergrundaufgaben am Leben, um Statistiken aufzublähen.',
      },
    ],
    steps: {
      title: 'Akkufreundlich in fünf Minuten',
      items: [
        'Prüfen Sie Einstellungen → Batterie für Ihren echten Ausgangswert.',
        'Stellen Sie Automatisch verbinden auf „Nur WLAN“, wenn Sie vor allem Hotspot-Schutz brauchen.',
        'Lassen Sie das Protokoll auf Smart oder fixieren Sie WireGuard im Heim-WLAN.',
        'Nutzen Sie „Optimaler Standort“ oder den nächsten Server mit niedrigem Ping.',
        'Bei schwachem Signal in vertrauenswürdigen Netzen lieber trennen, statt gegen das Funkmodul anzukämpfen.',
      ],
    },
    table: {
      title: 'Typische Szenarien und ihr Akkuverbrauch',
      head: ['Szenario', 'Akku-Einfluss', 'Empfehlung'],
      rows: [
        ['Heim-WLAN, WireGuard, naher Server', 'Minimal', 'So lassen'],
        ['Café-WLAN mit „Nur WLAN“', 'Gering', 'Empfohlene Standardeinstellung'],
        ['„Immer“ über schwaches LTE', 'Spürbar', '„Nur WLAN“ oder in vertrauten Netzen trennen'],
        ['Netz, das den Tunnel ständig trennt', 'Hoch', 'Smart Connect oder anderes Protokoll'],
      ],
    },
    bullets: [
      'Verschlüsselung ist günstig; Funkmodul und schwaches Signal sind teuer',
      '„Nur WLAN“ schützt Hotspots, ohne den Mobilfunk zu belasten',
      'WireGuard ist in stabilen Netzen das leichteste Protokoll',
      'Verbindungsschleifen kosten mehr als jede Protokollwahl',
      'Vergleichen Sie die Akkustatistik über mehrere ähnliche Tage',
    ],
    cta: CTA,
    faq: [
      { q: 'Leert ein VPN den iPhone-Akku?', a: 'Ein wenig. Im stabilen WLAN mit nahem Server ist der Unterschied meist klein; schwaches Signal und ständige Neuverbindungen vergrößern ihn.' },
      { q: 'Welches Protokoll braucht am wenigsten Akku?', a: 'In stabilen Netzen WireGuard. In Netzen, die VPNs stören, ist das Protokoll am sparsamsten, das verbunden bleibt — genau das sucht Smart Connect.' },
      { q: 'Soll das VPN immer an sein?', a: 'Nur wenn Sie es überall brauchen. Für Cafés und Hotels ist „Nur WLAN“ ein guter Kompromiss.' },
      { q: 'Funktioniert das VPN im Stromsparmodus?', a: 'Ja. iOS hält den Tunnel aufrecht; der Stromsparmodus begrenzt nur andere Hintergrundaktivität.' },
    ],
  },

  'vpn-iphone-shortcuts': {
    h1: 'VPN in Apple Kurzbefehlen — FollowNet per Tipp, Siri oder Automation verbinden',
    lead:
      'FollowNet arbeitet mit der Kurzbefehle-App zusammen: Sie können verbinden, trennen oder ein Netzwerkprofil anwenden, ohne die App zu öffnen. Dieser Guide zeigt praktische Kurzbefehle für Arbeit, Reisen und Feierabend — und wie sie mit Automatisch verbinden zusammenspielen.',
    sections: [
      {
        title: 'Was FollowNet in Kurzbefehlen kann',
        body:
          'Die App bringt drei Aktionen mit: Verbinden, Trennen und Profil anwenden. Profil anwenden wechselt zu einer Vorgabe — Smart, Public Wi‑Fi, Travel, Restricted — oder zu einem eigenen Profil. Die Aktionen laufen aus der Kurzbefehle-App, über ein Symbol auf dem Home-Bildschirm, per Siri, über die Aktionstaste neuerer iPhones oder als persönliche Automation.',
      },
      {
        title: 'Kurzbefehle und Automatisch verbinden',
        body:
          'Automatisch verbinden folgt Netzwerkregeln, etwa „in unbekannten WLANs einschalten“. Kurzbefehle sind bewusste Aktionen oder Automationen nach Zeit, Ort oder Fokus. Beides ergänzt sich: Automatisch verbinden deckt Hotspots allein ab, ein Kurzbefehl übernimmt Fälle, die Regeln nicht erraten — etwa Arbeitsbeginn oder die Ankunft am Flughafen.',
        image: 'autoconnect',
        imageCaption: 'Automatisch verbinden regelt Netze, Kurzbefehle alles Übrige.',
      },
      {
        title: 'Rezept: Fokus „Arbeit“',
        body:
          'Erstellen Sie eine persönliche Automation: Wenn der Fokus „Arbeit“ startet, Profil anwenden → Ihr Arbeitsprofil, dann Verbinden. Endet der Fokus, Trennen. So folgt der Tunnel Ihrem Kalender ohne einen einzigen Tipp.',
      },
      {
        title: 'Rezept: Ankunft am Flughafen oder Hotel',
        body:
          'Nutzen Sie eine Orts-Automation für Terminal oder Hoteladresse: Profil anwenden → Travel, dann Verbinden. Das Travel-Profil ist auf instabile öffentliche Netze und Anmeldeseiten abgestimmt — Sie müssen nicht mit dem Koffer in der Hand an Einstellungen denken.',
      },
      {
        title: 'Rezept: Aktionstaste und Siri',
        body:
          'Legen Sie einen Kurzbefehl „FollowNet verbinden“ auf die Aktionstaste oder bitten Sie Siri, ihn beim Namen auszuführen. Schneller lässt sich das VPN vor einer sensiblen App im öffentlichen WLAN nicht einschalten.',
      },
      {
        title: 'Berechtigungen und Grenzen',
        body:
          'Beim ersten Ausführen fragt iOS eventuell nach einer Erlaubnis — einmal bestätigen genügt. Kurzbefehle umgehen keine VPN-Konfiguration, die Sie in den Einstellungen entfernt oder abgelehnt haben. Bei Free startet Verbinden keinen Tunnel, wenn das Wochenvolumen aufgebraucht ist, bis die Woche zurückgesetzt wird oder Sie upgraden.',
      },
    ],
    steps: {
      title: 'Ihren ersten VPN-Kurzbefehl anlegen',
      items: [
        'Öffnen Sie die Kurzbefehle-App und tippen Sie auf +.',
        'Suchen Sie FollowNet und fügen Sie Profil anwenden, dann Verbinden hinzu.',
        'Benennen Sie den Kurzbefehl, etwa „Sicheres WLAN“.',
        'Führen Sie ihn einmal aus und bestätigen Sie die Abfrage.',
        'Optional: auf den Home-Bildschirm, die Aktionstaste oder in eine Automation legen.',
      ],
    },
    table: {
      title: 'Fertige Ideen',
      head: ['Auslöser', 'Aktionen', 'Warum'],
      rows: [
        ['Fokus „Arbeit“ an', 'Profil anwenden → Verbinden', 'Tunnel folgt dem Kalender'],
        ['Ankunft am Flughafen', 'Travel anwenden → Verbinden', 'Bereit für öffentliches WLAN'],
        ['Aktionstaste', 'Verbinden', 'Ein Druck vor einer sensiblen App'],
        ['Fokus „Schlafen“', 'Trennen', 'Kein Tunnel, wenn er nicht gebraucht wird'],
      ],
    },
    bullets: [
      'Drei Aktionen: Verbinden, Trennen und Profil anwenden',
      'Funktioniert mit Siri, Aktionstaste und Automationen',
      'Ergänzt Automatisch verbinden, ersetzt es aber nicht',
      'Profile: Smart, Public Wi‑Fi, Travel, Restricted und eigene',
      'Das Wochenvolumen von Free gilt weiterhin',
    ],
    cta: CTA,
    faq: [
      { q: 'Kann ich das VPN mit Siri einschalten?', a: 'Ja. Legen Sie einen Kurzbefehl mit der FollowNet-Aktion Verbinden an und rufen Sie ihn per Siri beim Namen auf.' },
      { q: 'Muss die App dafür geöffnet sein?', a: 'Nein. Die Aktionen laufen im Hintergrund; die App muss nur installiert und die VPN-Konfiguration erlaubt sein.' },
      { q: 'Kann ein Kurzbefehl den Server wählen?', a: 'Kurzbefehle wenden Profile an und verbinden. Server oder „Optimaler Standort“ wählen Sie in der App — der Kurzbefehl nutzt diese Wahl.' },
      { q: 'Laufen Automationen ohne Bestätigung?', a: 'Bei den meisten Auslösern lässt iOS „Vor Ausführen bestätigen“ abschalten. Manche Orts-Auslöser zeigen trotzdem eine Mitteilung.' },
    ],
  },

  'vpn-for-students': {
    h1: 'VPN für Studierende auf dem iPhone — Campus-WLAN, Wohnheim und kleines Budget',
    lead:
      'Studierende verbringen den Großteil des Tages in geteilten Netzen: Campus-WLAN, Wohnheim, Bibliothek und Café. Ein VPN verschlüsselt diesen Verkehr auf dem Weg zum Server. Dieser Guide zeigt, wann es sich lohnt, wie Sie mit Free starten und wie Sie die Regeln Ihrer Hochschule einhalten.',
    sections: [
      {
        title: 'Warum geteilte Netze das Hauptrisiko sind',
        body:
          'Campus- und Wohnheimnetze verbinden Hunderte fremder Geräte. Der meiste Verkehr läuft bereits über HTTPS, doch ein VPN ergänzt eine weitere Schicht: Das lokale Netz sieht nur eine verschlüsselte Verbindung zum VPN-Server, nicht welche Dienste Sie nutzen. Am wichtigsten ist das in offenen Bibliotheks- und Café-Hotspots ohne Passwort.',
      },
      {
        title: 'Mit Free starten',
        body:
          'FollowNet Free enthält ein wöchentliches Datenvolumen — genug für Messenger, E-Mail, Banking und gelegentliches Surfen im öffentlichen WLAN. Die Anzeige in der App zeigt, wie viel übrig ist und wann die Woche zurückgesetzt wird. Für Vorlesungen, große Downloads und Videos nutzen Sie vertrauenswürdige Netze oder ziehen Premium in Betracht.',
        image: 'stats',
        imageCaption: 'Die App zeigt das Wochenvolumen und den nächsten Reset.',
      },
      {
        title: 'Wenn das Campus-WLAN VPNs stört',
        body:
          'Manche Hochschulnetze filtern VPN-Protokolle. Lassen Sie das Protokoll auf Smart: Smart Connect probiert verschiedene Protokolle und behält das, das tatsächlich Daten überträgt. Blockiert das Netz den Tunnel trotzdem, respektieren Sie das — es ist die Richtlinie des Netzbetreibers, und mobile Daten bleiben eine Option.',
        image: 'protocol',
        imageCaption: 'Smart Connect wählt ein Protokoll, das im aktuellen Netz funktioniert.',
      },
      {
        title: 'Premium mit Bedacht teilen',
        body:
          'Ein Premium-Konto funktioniert auf bis zu fünf Geräten, darunter iPhone, iPad und die Chrome-Erweiterung. Mitbewohner teilen sich manchmal ein Abo, doch Geräte auf einem Konto nutzen es gemeinsam — teilen Sie nur mit Menschen, denen Sie vertrauen, und entfernen Sie Geräte, die Sie nicht mehr nutzen.',
        image: 'premium',
        imageCaption: 'Premium: mehr Standorte und bis zu fünf Geräte pro Konto.',
      },
      {
        title: 'Die Regeln gelten weiter',
        body:
          'Ein VPN ändert nichts an der Nutzungsordnung Ihrer Hochschule. Nutzen Sie es nicht, um auf Systeme zuzugreifen, für die Sie keine Berechtigung haben, und niemals in Prüfungen, in denen es verboten ist. Ein VPN schützt Ihre Verbindung; es ist kein Werkzeug, um akademische Regeln zu umgehen.',
      },
      {
        title: 'Vor der Heimreise oder dem Auslandssemester',
        body:
          'Installieren und testen Sie FollowNet vor der Abreise. Im Ausland sind Hotel- und Hostel-WLANs typische Orte, an denen das Travel-Profil und „Nur WLAN“ helfen. Stellen Sie sicher, dass Sie wissen, wie Sie das Protokoll wechseln, wenn sich ein Netz seltsam verhält.',
      },
    ],
    steps: {
      title: 'Einrichtung für Studierende',
      items: [
        'FollowNet installieren und mit dem E-Mail-Code anmelden.',
        'Automatisch verbinden auf „Nur WLAN“ für Campus und Cafés stellen.',
        'Das Protokoll auf Smart lassen.',
        'Bei Free die Wochenanzeige im Blick behalten.',
        'Einmal die Netzwerkregeln Ihrer Hochschule lesen.',
      ],
    },
    table: {
      title: 'Wo ein VPN auf dem Campus hilft',
      head: ['Ort', 'Risiko', 'Empfehlung'],
      rows: [
        ['Offenes Bibliotheks- oder Café-WLAN', 'Hoch', 'Immer verbinden'],
        ['Wohnheimnetz', 'Mittel', '„Nur WLAN“'],
        ['Campus-WLAN mit Anmeldung', 'Mittel', 'Nach dem Login verbinden'],
        ['Mobile Daten', 'Gering', 'Optional'],
      ],
    },
    bullets: [
      'Geteilte Netze sind der Hauptgrund für ein VPN auf dem Campus',
      'Das Wochenvolumen von Free reicht für Messenger und Surfen',
      'Smart Connect kommt mit Netzen zurecht, die VPNs stören',
      'Premium deckt bis zu fünf Geräte auf einem Konto ab',
      'Die Netzwerkregeln der Hochschule gelten weiterhin',
    ],
    cta: CTA,
    faq: [
      { q: 'Reicht Free für Studierende?', a: 'Für Messenger, E-Mail und Surfen im öffentlichen WLAN meist ja. Videos und große Downloads verbrauchen das Wochenvolumen schnell.' },
      { q: 'Ist ein VPN auf dem Campus erlaubt?', a: 'Ein VPN zu nutzen ist in der Regel legal, doch der Netzbetreiber legt Regeln für sein Netz fest. Halten Sie sich an die Richtlinien Ihrer Hochschule.' },
      { q: 'Kann ich Premium mit Mitbewohnern teilen?', a: 'Ein Konto funktioniert auf bis zu fünf Geräten. Teilen Sie nur mit Menschen, denen Sie vertrauen — es ist dasselbe Konto.' },
      { q: 'Warum verbindet sich das VPN im Campus-WLAN nicht?', a: 'Manche Netze filtern VPN-Protokolle. Versuchen Sie Smart Connect; bleibt es blockiert, ist das die Netzrichtlinie.' },
    ],
  },

  'vpn-for-banking-apps': {
    h1: 'VPN für Banking-Apps auf dem iPhone — sichereres öffentliches WLAN, kein Ersatz für Banksicherheit',
    lead:
      'Eine Banking-App im Café- oder Hotel-WLAN zu öffnen, ist genau die Situation, in der ein VPN hilft: Es verschlüsselt den Weg zwischen iPhone und VPN-Server. Face ID, Einmalcodes und die Betrugserkennung der Bank ersetzt es aber nicht. So nutzen Sie beides zusammen, ohne zusätzliche Prüfungen auszulösen.',
    sections: [
      {
        title: 'Was ein VPN beim Banking bringt',
        body:
          'Banking-Apps nutzen bereits HTTPS und Zertifikatsprüfung. Ein VPN ergänzt Schutz auf Netzwerkebene: Im öffentlichen WLAN sehen Hotspot-Betreiber und andere Nutzer nur einen verschlüsselten Tunnel, nicht welche Bank oder welchen Dienst Sie aufrufen. Es senkt auch das Risiko gefälschter Hotspots, die den Netznamen eines Cafés imitieren.',
      },
      {
        title: 'Was ein VPN nicht kann',
        body:
          'Ein VPN schützt nicht vor Phishing-Links, falschen Anrufen „von der Bank“ oder Personen, die Ihren Einmalcode kennen. Geben Sie Codes nie weiter und installieren Sie keine Apps auf Bitte eines Anrufers. Die Sicherheitsfunktionen Ihrer Bank und Ihre Vorsicht bleiben der wichtigste Schutz.',
      },
      {
        title: 'Warum die Bank zusätzliche Prüfungen verlangen kann',
        body:
          'Banken achten auf ungewöhnliche Anmeldungen. Ein Login aus einem fremden Land oder Rechenzentrum kann einen SMS-Code oder eine vorübergehende Sperre auslösen. Wählen Sie einen Server im eigenen Land oder den nächstgelegenen Standort — das wirkt wie normale Nutzung und hält die Latenz niedrig.',
        image: 'servers',
        imageCaption: 'Ein naher Server lässt Bank-Logins vertraut aussehen.',
      },
      {
        title: 'Wenn die Banking-App das VPN ablehnt',
        body:
          'Manche Banken schränken VPN-Verbindungen in ihren Apps ein. Folgen Sie dann der Richtlinie der Bank: FollowNet trennen, vom öffentlichen WLAN auf mobile Daten wechseln und den Vorgang abschließen. Wir helfen nicht dabei, Sicherheitsprüfungen von Banken zu umgehen.',
      },
      {
        title: 'Sichere Routine im öffentlichen WLAN',
        body:
          'Aktivieren Sie Automatisch verbinden mit „Nur WLAN“, damit der Tunnel bereits steht, wenn Sie einem Hotspot beitreten. Warten Sie auf „Verbunden“, öffnen Sie dann die Banking-App und entsperren Sie sie mit Face ID. Bestätigen Sie größere Zahlungen nicht in unbekannten Netzen, wenn mobile Daten verfügbar sind.',
        image: 'connect',
        imageCaption: 'Warten Sie auf „Verbunden“, bevor Sie die Bank-App öffnen.',
      },
    ],
    steps: {
      title: 'Banking im öffentlichen WLAN Schritt für Schritt',
      items: [
        'In FollowNet Automatisch verbinden auf „Nur WLAN“ stellen.',
        '„Optimaler Standort“ oder einen Server im eigenen Land wählen.',
        'Dem WLAN beitreten und auf „Verbunden“ warten.',
        'Banking-App öffnen und mit Face ID entsperren.',
        'Blockiert die Bank das VPN: trennen und mobile Daten nutzen.',
      ],
    },
    table: {
      title: 'Wer wovor schützt',
      head: ['Bedrohung', 'VPN', 'Bank / Sie'],
      rows: [
        ['Mitlesen im öffentlichen WLAN', 'Verschlüsselt den Tunnel', '—'],
        ['Gefälschter Hotspot', 'Senkt das Risiko', 'Netznamen prüfen'],
        ['Phishing-Link oder Anruf', 'Nein', 'Codes nie weitergeben'],
        ['Gestohlenes Passwort', 'Nein', 'Face ID, 2FA, Bank-Benachrichtigungen'],
      ],
    },
    bullets: [
      'Ein VPN schützt den Netzwerkweg im öffentlichen WLAN',
      'Ein Server im eigenen Land vermeidet zusätzliche Prüfungen',
      'Face ID und Einmalcodes bleiben unverzichtbar',
      'Schränkt die Bank VPNs ein, gilt ihre Richtlinie',
      'Größere Zahlungen in fremden Netzen lieber über mobile Daten',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist Banking mit VPN sicher?', a: 'Ja, ein seriöses VPN ergänzt Schutz in öffentlichen Netzen. Wählen Sie einen Server im eigenen Land, um zusätzliche Prüfungen zu vermeiden.' },
      { q: 'Warum hat meine Bank den Login blockiert?', a: 'Ein ungewohnter Standort kann verdächtig wirken. Nutzen Sie einen nahen Server oder trennen Sie das VPN und melden Sie sich über mobile Daten an.' },
      { q: 'Schützt ein VPN vor Phishing?', a: 'Nein. Phishing täuscht Menschen, nicht das Netz. Geben Sie Einmalcodes nie weiter.' },
      { q: 'Brauche ich zu Hause ein VPN fürs Banking?', a: 'Im eigenen, gesicherten WLAN ist es optional. Am wichtigsten ist es in öffentlichen und geteilten Netzen.' },
    ],
  },

  'vpn-split-tunneling-ios': {
    h1: 'Split-Tunneling auf dem iPhone — was iOS erlaubt und was Sie stattdessen nutzen',
    lead:
      'Split-Tunneling heißt: Nur ein Teil des Verkehrs läuft durchs VPN, der Rest direkt. Unter Windows und Android lassen viele Apps einzelne Programme ausschließen. Auf dem iPhone funktionieren VPN-Apps für Privatnutzer anders. Dieser Guide erklärt Apples Grenzen ehrlich und zeigt, welche FollowNet-Werkzeuge dieselben Aufgaben lösen.',
    sections: [
      {
        title: 'Wie ein VPN unter iOS arbeitet',
        body:
          'Auf dem iPhone baut ein VPN für Privatnutzer einen Systemtunnel auf: Solange er verbunden ist, senden Apps ihren Verkehr in der Regel hindurch. Per-App-VPN gibt es in iOS, es ist aber für per MDM verwaltete Firmengeräte gedacht, nicht für App-Store-Apps auf privaten Telefonen. Deshalb bieten ehrliche iOS-VPN-Apps keine Liste „diese App ausschließen“.',
      },
      {
        title: 'Warum wir kein Split-Tunneling pro App versprechen',
        body:
          'Manche Apps werben auf dem iPhone mit Split-Tunneling, in der Praxis ist es aber auf verwaltete Geräte beschränkt oder betrifft nur bestimmte Adressbereiche. Wir beschreiben lieber, was tatsächlich passiert, statt einen Schalter zu zeigen, der nicht tut, was draufsteht.',
      },
      {
        title: 'Netzwerkprofile statt Ausnahmen',
        body:
          'Die meisten Split-Tunnel-Wünsche lauten eigentlich „VPN an manchen Orten, an anderen nicht“. Das decken Netzwerkprofile und Automatisch verbinden ab: „Nur WLAN“ schützt öffentliche Hotspots, während mobile Daten direkt laufen; Vorgaben wie Public Wi‑Fi und Travel stimmen das Verhalten auf bestimmte Situationen ab.',
        image: 'autoconnect',
        imageCaption: '„Nur WLAN“: VPN in Hotspots, direkt im Mobilfunk.',
      },
      {
        title: 'DNS-Einstellungen für feinere Kontrolle',
        body:
          'Manchmal geht es nicht ums Umleiten, sondern um die Namensauflösung — etwa um Werbung oder Tracker zu blockieren. DNS-Vorgaben in FollowNet, zum Beispiel AdGuard zum Filtern, erledigen das innerhalb des Tunnels ohne zusätzliche App.',
        image: 'dns',
        imageCaption: 'DNS-Vorgaben ändern die Namensauflösung im Tunnel.',
      },
      {
        title: 'Am Computer: nur den Browser leiten',
        body:
          'Brauchen Sie auf Mac oder PC nur Schutz beim Surfen, leitet die FollowNet-Erweiterung für Chrome den Browserverkehr, während andere Programme direkt laufen. Das ist das praktischste Gegenstück zu Split-Tunneling und nutzt dasselbe Konto.',
      },
      {
        title: 'Wenn eine App durchs VPN nicht funktioniert',
        body:
          'Verweigert eine bestimmte App — Bank, lokaler Dienst, Smart-Home-Zentrale im Heimnetz — bei aktiver Verbindung den Dienst, trennen Sie für diese Aufgabe kurz oder wählen Sie einen Server im eigenen Land. Kurzbefehle machen das schnell: ein Tipp zum Trennen, einer zum Wiederverbinden.',
      },
    ],
    steps: {
      title: 'Split-Tunnel-Ergebnisse auf dem iPhone',
      items: [
        'Klären, wo Sie das VPN wirklich brauchen: Hotspots, Reisen oder überall.',
        'Automatisch verbinden auf „Nur WLAN“ stellen, wenn mobile Daten direkt laufen dürfen.',
        'Ein passendes Netzwerkprofil wählen.',
        'Für Apps, die fremde Standorte nicht mögen, einen Server im eigenen Land nutzen.',
        'Kurzbefehle zum Verbinden und Trennen für schnelle Ausnahmen anlegen.',
      ],
    },
    table: {
      title: 'Aufgabe und passendes Werkzeug',
      head: ['Aufgabe', 'Split-Tunneling pro App', 'FollowNet-Werkzeug'],
      rows: [
        ['VPN nur im öffentlichen WLAN', 'Nicht nötig', '„Nur WLAN“'],
        ['Nur den Browser am Computer schützen', 'Nicht nötig', 'Chrome-Erweiterung'],
        ['App mag fremden Standort nicht', 'Nicht unter iOS', 'Server im eigenen Land'],
        ['Schnelle Ausnahme für eine Aufgabe', 'Nicht unter iOS', 'Kurzbefehl Trennen'],
      ],
    },
    bullets: [
      'VPNs für Privatnutzer arbeiten unter iOS als Systemtunnel',
      'Per-App-VPN auf dem iPhone ist für MDM-verwaltete Geräte',
      '„Nur WLAN“ deckt die meisten Split-Tunnel-Wünsche ab',
      'Die Chrome-Erweiterung leitet am Computer nur den Browser',
      'Kurzbefehle erleichtern schnelle Ausnahmen',
    ],
    cta: CTA,
    faq: [
      { q: 'Unterstützt FollowNet Split-Tunneling auf dem iPhone?', a: 'Nicht pro App — iOS behält das verwalteten Geräten vor. Regeln für Automatisch verbinden, Profile und Kurzbefehle lösen die meisten gleichen Aufgaben.' },
      { q: 'Kann ich meine Banking-App vom VPN ausnehmen?', a: 'Nicht einzeln. Nutzen Sie einen Server im eigenen Land oder trennen Sie kurz per Kurzbefehl.' },
      { q: 'Gibt es Split-Tunneling am Computer?', a: 'Die Chrome-Erweiterung leitet nur den Browser; andere Programme laufen direkt.' },
      { q: 'Warum werben manche iPhone-VPNs mit Split-Tunneling?', a: 'Meist ist es auf IP-Bereiche oder verwaltete Geräte beschränkt. Prüfen Sie, was genau ausgenommen wird, bevor Sie sich darauf verlassen.' },
    ],
  },
};
