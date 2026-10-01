import type { LandingContent } from './seo-landing.content';
import type { CoreLandingSlug } from './seo-landing.slugs';

const CTA = 'Im App Store laden';

export const DE: Record<CoreLandingSlug, LandingContent> = {
  'vpn-for-iphone': {
    h1: 'VPN für iPhone — schnell, privat und einfach',
    lead:
      'FollowNet ist ein iOS-VPN für iPhone und iPad: Verbinden mit einem Tipp, WireGuard und IKEv2, Smart Connect für schwierige Netze und ein kostenloser Tarif ohne Kreditkarte.',
    sections: [
      {
        title: 'Warum ein VPN auf dem iPhone?',
        body:
          'Öffentliches WLAN, Hotspots auf Reisen und manche Mobilfunkanbieter machen Ihren Datenverkehr anfällig für Mitlesen oder Drosselung. Ein VPN verschlüsselt die Verbindung und hilft, Surfen, Messenger und Streaming auf iOS privat zu halten.',
      },
      {
        title: 'Für iOS gebaut, kein generischer Klon',
        body:
          'FollowNet nutzt die nativen VPN-Schnittstellen von iOS (Network Extension) und bringt Kurzbefehle, automatisches Verbinden, eigene DNS-Server und die aktuell in der App gelisteten Standorte in eine Oberfläche, die fürs iPhone gemacht ist.',
      },
    ],
    bullets: [
      'Free-Tarif mit Wochenvolumen — erst testen, dann abonnieren',
      'WireGuard, IKEv2, AmneziaWG, Hysteria2 und VLESS Reality (Smart Connect wählt bei Bedarf)',
      'Der Umgang mit Daten ist in unserer Datenschutzerklärung beschrieben',
      'Premium: unbegrenztes Datenvolumen und die Standorte des aktuellen Tarifs',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist FollowNet ein kostenloses VPN fürs iPhone?', a: 'Ja. FollowNet bietet einen kostenlosen Tarif mit wöchentlichem Datenvolumen. Premium hebt die Begrenzung auf und schaltet die Standorte frei, die für diesen Tarif in der App angezeigt werden.' },
      { q: 'Funktioniert FollowNet auf dem iPad?', a: 'Ja. Dieselbe iOS-App läuft auf iPhone und iPad.' },
      { q: 'Welches VPN-Protokoll sollte ich auf iOS nutzen?', a: 'WireGuard ist schnell und modern. IKEv2 ist in Mobilfunknetzen stabil. Smart Connect wählt automatisch das passende Protokoll für Ihr Netz.' },
    ],
  },
  'wireguard-vpn-ios': {
    h1: 'WireGuard VPN für iOS — schnell und modern',
    lead:
      'FollowNet bringt natives WireGuard auf iPhone und iPad, dazu AmneziaWG und weitere Protokolle, wenn Netze Standard-VPNs blockieren. Smart Connect kann für Sie wechseln, damit Sie verbunden bleiben, ohne zu raten.',
    sections: [
      {
        title: 'Warum WireGuard auf iOS?',
        body:
          'WireGuard ist schlank, nutzt moderne Kryptografie und hat meist eine geringere Latenz als ältere VPN-Protokolle. Auf iPhone und iPad ist es in ruhigen Netzen eine starke Voreinstellung für Surfen, Messenger, Videoanrufe und viele Streaming- oder Gaming-Sitzungen.',
      },
      {
        title: 'So aktivieren Sie WireGuard in FollowNet',
        body:
          'Öffnen Sie Einstellungen → Protokoll und wählen Sie WireGuard — oder lassen Sie Smart Connect an, damit FollowNet WireGuard wählt, wenn es passt. Prüfen Sie nach dem Verbinden das aktive Protokoll in der App und starten Sie den Speed Test im selben WLAN oder LTE, um echte Werte zu vergleichen.',
      },
      {
        title: 'Wenn WireGuard blockiert oder gedrosselt wird',
        body:
          'Manche Internetanbieter, Hotels und Reise-SIMs erkennen oder bremsen WireGuard. FollowNet kann je nach Tarif und Netz auf AmneziaWG, Hysteria2, VLESS Reality oder IKEv2 ausweichen — manuell oder über Smart Connect (und mit dem Profil „Restricted“, wenn Sie diese Kette standardmäßig wollen).',
      },
      {
        title: 'WireGuard im Vergleich zu anderen FollowNet-Protokollen',
        body:
          'In offenen Netzen ist WireGuard oft am schnellsten. IKEv2 verbindet sich beim Wechsel zwischen Funkzellen oft sanfter neu. AmneziaWG und Hysteria2 helfen, wenn das Netz klassische Tunnel ausbremst. Kein Protokoll gewinnt überall — messen Sie auf Ihrer Strecke.',
      },
      {
        title: 'Free mit Wochenvolumen oder Premium',
        body:
          'WireGuard steht im kostenlosen Wochenvolumen zur Verfügung, damit Sie Tempo und Zuverlässigkeit testen können. Premium hebt die Datenbegrenzung auf und schaltet die Standorte des aktuellen Premium-Tarifs frei, die in der App angezeigt werden. Server-Zahlen erfinden wir hier nicht.',
      },
    ],
    bullets: [
      'Natives WireGuard über die iOS Network Extension',
      'WireGuard manuell oder automatische Auswahl per Smart Connect',
      'Ausweichoptionen bei Bedarf: IKEv2, AmneziaWG, Hysteria2',
      'Standorte stehen in der App — nicht aufgebläht auf dieser Seite',
      'Funktioniert im Free-Wochenvolumen; Premium für unbegrenzte Nutzung',
    ],
    cta: 'FollowNet im App Store laden',
    faq: [
      { q: 'Ist WireGuard auf dem iPhone sicher?', a: 'WireGuard basiert auf einem modernen kryptografischen Design. FollowNet betreibt es wie andere App-Store-VPNs über Apples Network-Extension-Framework.' },
      { q: 'Kann ich nur WireGuard erzwingen?', a: 'Ja. Öffnen Sie Einstellungen → Protokoll und wählen Sie WireGuard. Nutzen Sie Smart Connect, wenn Sie lieber eine automatische Auswahl möchten.' },
      { q: 'Was tun, wenn WireGuard nicht verbindet?', a: 'Probieren Sie Smart Connect, wechseln Sie zu AmneziaWG, IKEv2 oder Hysteria2, wählen Sie einen anderen Standort aus der App und testen Sie erneut mit dem Speed Test.' },
      { q: 'Unterstützt FollowNet Split-Tunneling auf iOS?', a: 'Im verbundenen Zustand leitet iOS den Geräteverkehr durch den VPN-Tunnel. Split-Tunneling pro App ist durch Apples Plattform eingeschränkt; FollowNet folgt den VPN-Regeln des Systems.' },
    ],
  },
  'free-vpn-iphone': {
    h1: 'Kostenloses VPN fürs iPhone — FollowNet mit Wochenvolumen testen',
    lead:
      'Sie suchen ein kostenloses VPN fürs iPhone ohne Kreditkarte? FollowNet Free enthält ein wöchentliches Datenvolumen, moderne Protokolle, Smart Connect und alles, um den Dienst vor Premium zu prüfen.',
    sections: [
      {
        title: 'Was Free enthält',
        body:
          'Mit FollowNet Free verbinden Sie iPhone und iPad im Rahmen eines wöchentlichen Datenvolumens. Sie können die Protokolle Ihres Tarifs ausprobieren, aus den in der App gelisteten Free-Standorten wählen, Smart Connect nutzen und — wo verfügbar — automatisches Verbinden, DNS-Profile und den Speed Test testen.',
      },
      {
        title: 'So funktioniert das Wochenvolumen',
        body:
          'Free ist pro Woche begrenzt, nicht „für immer unbegrenzt“. Nutzen Sie das Volumen, um die WLAN- und Mobilfunknetze zu testen, die Ihnen wichtig sind. Ist es aufgebraucht, warten Sie auf den nächsten Zeitraum oder wechseln zu Premium für unbegrenzten Traffic zu den aktuellen App-Store-Bedingungen.',
      },
      {
        title: 'Free oder Premium — ehrlich verglichen',
        body:
          'Free dient zum Ausprobieren: Wochenvolumen und die in der App angezeigten Free-Server. Premium hebt die Begrenzung auf und schaltet die Premium-Standorte des aktuellen Tarifs frei. Premium ist keine „stärkere Verschlüsselung“, sondern Kapazität, Standorte und Komfort. Die genauen Tarifdetails stehen in der App.',
      },
      {
        title: 'Ohne Karte starten',
        body:
          'Laden Sie FollowNet aus dem App Store, melden Sie sich mit einem E-Mail-Code an, bestätigen Sie einmal die iOS-VPN-Konfiguration und tippen Sie auf Verbinden. Für Free ist keine Kreditkarte nötig. Lesen Sie die Datenschutzerklärung, bevor Sie die App für sensible Sitzungen nutzen.',
      },
      {
        title: 'Wann Free reicht — und wann nicht',
        body:
          'Free passt gut für kurze Sitzungen im öffentlichen WLAN, Check-ins auf Reisen und Protokollvergleiche. Langes HD-Streaming, ganztägige mobile Nutzung oder große Downloads brauchen wegen des Wochenlimits meist Premium. Freigeschaltete Streaming-Kataloge sind in keinem Tarif garantiert.',
      },
    ],
    bullets: [
      'Keine Kreditkarte für Free nötig',
      'Wochenvolumen — genug zum Testen, nicht unbegrenzt',
      'Protokolle und Free-Standorte werden in der App angezeigt',
      'Smart Connect, automatisches Verbinden, DNS und Speed Test, wo verfügbar',
      'Upgrade in der App über den App Store, wenn Sie unbegrenzt brauchen',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist FollowNet auf dem iPhone wirklich kostenlos?', a: 'Ja. Free enthält ein Wochenvolumen zum Testen. Premium ist optional und hebt die Begrenzung gemäß den aktuellen Tarifbedingungen in der App auf.' },
      { q: 'Ist das Free-Limit täglich oder wöchentlich?', a: 'Wöchentlich. Das aktuelle Volumen und den Zeitpunkt der Erneuerung sehen Sie in der App — rechnen Sie nicht mit einer täglichen Auffüllung.' },
      { q: 'Gibt es Werbung in der kostenlosen Version?', a: 'FollowNet Free ist in manchen Regionen werbefinanziert; Premium ist werbefrei.' },
      { q: 'Kann ich Free im öffentlichen WLAN nutzen?', a: 'Ja. Auch Free verschlüsselt den Datenverkehr im Rahmen des Wochenvolumens — praktisch in Cafés, an Flughäfen und in Hotels.' },
    ],
  },
  'vpn-for-ipad': {
    h1: 'VPN für iPad — dieselbe FollowNet-App, für iOS optimiert',
    lead:
      'FollowNet gibt es als iOS-App für iPhone und iPad, mit den Protokollen und Kontofunktionen der aktuellen App-Store-Version.',
    sections: [
      { title: 'Warum ein VPN auf dem iPad?', body: 'Das iPad hängt oft im selben öffentlichen WLAN wie Ihr Telefon — auf Reisen, im Coworking-Space oder im Gästenetz. Ein VPN hilft, Safari, Apps und Downloads im Mobilfunk und im WLAN zu schützen.' },
      { title: 'FollowNet auf dem iPad nutzen', body: 'Richten Sie das VPN über denselben iOS-Berechtigungsdialog ein und wählen Sie dann Protokoll, automatisches Verbinden und DNS-Optionen, die in der aktuellen Version verfügbar sind.' },
    ],
    bullets: ['Universelle iOS-App — iPhone und iPad', 'Natives VPN über die Network Extension', 'Smart Connect für restriktive Netze', 'Free-Tarif und Premium über den App Store'],
    cta: CTA,
    faq: [
      { q: 'Brauche ich eine eigene iPad-App?', a: 'Nein. Laden Sie FollowNet einmal aus dem App Store; die App läuft auf iPhone und iPad.' },
      { q: 'Funktioniert das VPN mit iPad-Tastatur und Stage Manager?', a: 'Ja. Das VPN läuft auf Systemebene und stört das Multitasking nicht.' },
      { q: 'Kann ich auf iPad und iPhone verschiedene Server nutzen?', a: 'Ihr Konto funktioniert auf jedem angemeldeten Gerät; den Server wählen Sie pro Gerät.' },
    ],
  },
  'ikev2-vpn-ios': {
    h1: 'IKEv2 VPN für iOS — stabil im Mobilfunknetz',
    lead:
      'IKEv2 ist ein bewährtes VPN-Protokoll für iPhone und iPad: schnelles Wiederverbinden beim Wechsel zwischen WLAN und Mobilfunk. FollowNet unterstützt IKEv2 neben WireGuard, AmneziaWG und Smart Connect.',
    sections: [
      { title: 'Wann IKEv2 auf iOS die richtige Wahl ist', body: 'IKEv2 kommt gut mit Netzwechseln zurecht — auf dem Arbeitsweg, im Aufzug oder beim Wechsel zwischen LTE und WLAN. Es ist eine solide Wahl, wenn WireGuard bei Ihrem Anbieter gedrosselt oder blockiert wird.' },
      { title: 'IKEv2 in FollowNet', body: 'Wählen Sie IKEv2 manuell unter Einstellungen → Protokoll oder nutzen Sie Smart Connect. Die App zeigt, welche Kombinationen aus Protokoll und Server aktuell verfügbar sind.' },
    ],
    bullets: ['Stabiles Wiederverbinden beim Zellwechsel', 'In Free und Premium verfügbar', 'Funktioniert mit automatischem Verbinden und eigenem DNS', 'Smart Connect kann IKEv2 automatisch wählen'],
    cta: CTA,
    faq: [
      { q: 'Ist IKEv2 auf dem iPhone sicher?', a: 'Richtig konfiguriert nutzt IKEv2 starke Verschlüsselung. FollowNet setzt es innerhalb von Apples VPN-Framework um.' },
      { q: 'IKEv2 oder WireGuard auf iOS?', a: 'WireGuard ist oft schneller; IKEv2 kann in manchen Mobilfunknetzen stabiler sein. Smart Connect probiert beide.' },
      { q: 'Wie aktiviere ich IKEv2?', a: 'Einstellungen → Protokoll → IKEv2 oder Smart Connect für die automatische Auswahl einschalten.' },
    ],
  },
  'vpn-for-wifi': {
    h1: 'VPN für öffentliches WLAN auf dem iPhone — verschlüsselt bleiben',
    lead:
      'Cafés, Flughäfen, Hotels und Gästenetze sind bequem, aber riskant. FollowNet verschlüsselt den Datenverkehr von iPhone und iPad bis zum VPN-Server in WLANs, denen Sie nicht ganz trauen — im Free-Wochenvolumen oder unbegrenzt mit Premium.',
    sections: [
      {
        title: 'Risiken in offenen und Gäste-WLANs',
        body:
          'Geteilte Hotspots können unverschlüsselten Datenverkehr für andere im selben Netz sichtbar machen. Auch passwortgeschützte Gästenetze werden manchmal von nicht vertrauenswürdigen Betreibern geführt. Ein VPN verschlüsselt den Weg zwischen Gerät und VPN-Server; einen bösartigen Hotspot macht es allein nicht „sicher“, und vor Phishing schützt es nicht.',
      },
      {
        title: 'Empfohlene Einrichtung für öffentliches WLAN',
        body:
          'Treten Sie dem Netz bei, erledigen Sie zuerst die Anmeldung im Captive Portal und verbinden Sie dann FollowNet. In unbekannten Netzen ist Smart Connect die beste Wahl. Aktivieren Sie automatisches Verbinden „Nur WLAN“, wenn der Tunnel starten soll, sobald Sie Ihre vertrauten Heimnetze verlassen.',
      },
      {
        title: 'Automatisches Verbinden im Alltag',
        body:
          'Die Modi für automatisches Verbinden (Nur WLAN, Nur LTE, Immer oder Aus) legen fest, wann das VPN startet. Kombinieren Sie das mit einem Widget auf dem Home-Bildschirm, um nach dem Hinsetzen im Café zu sehen, ob der Tunnel steht — Status zuerst, kein Marketing-Dashboard.',
      },
      {
        title: 'Tempo und Captive Portals',
        body:
          'Etwas Overhead ist im Hotel-WLAN normal. Nutzen Sie den Speed Test und einen näheren Standort aus der App. Scheitert WireGuard nach der Portal-Anmeldung, probieren Sie Smart Connect oder AmneziaWG/Hysteria2. Bandbreite, die der Hotspot nicht hat, kann ein VPN nicht herbeizaubern.',
      },
      {
        title: 'Free-Wochenvolumen oder Premium im WLAN',
        body:
          'Free verschlüsselt Sitzungen im öffentlichen WLAN im Rahmen des Wochenvolumens — genug für Reisetage und Arbeit im Café. Ganztägiges Streaming oder große Uploads im Hotel-WLAN brauchen meist Premium. Welche Standorte jeder Tarif bietet, steht in der App.',
      },
    ],
    bullets: [
      'Datenverkehr im Café-, Flughafen-, Hotel- und Gäste-WLAN verschlüsseln',
      'Erst Captive-Portal-Anmeldung, dann VPN verbinden',
      'Automatisches Verbinden im WLAN, damit Sie es nicht vergessen',
      'Smart Connect für gefilterte oder schwierige Hotspots',
      'Free-Wochenvolumen oder Premium für unbegrenzte Sitzungen',
    ],
    cta: CTA,
    faq: [
      { q: 'Brauche ich ein VPN im Heim-WLAN?', a: 'Heimnetze sind meist sicherer. Nutzen Sie ein VPN, wenn Sie mehr Privatsphäre gegenüber Ihrem Internetanbieter möchten oder das Netz mit Gästen teilen.' },
      { q: 'Macht ein VPN das Hotel-WLAN langsamer?', a: 'Etwas Overhead ist normal. Nutzen Sie den Speed Test und einen näheren Server aus der App für bessere Werte.' },
      { q: 'Funktioniert FollowNet auf Captive-Portal-Anmeldeseiten?', a: 'Verbinden Sie das VPN in der Regel nach der Portal-Anmeldung und lassen Sie den Tunnel dann für den Rest der Sitzung aktiv.' },
      { q: 'Reicht Free für öffentliches WLAN?', a: 'Für kurze und mittlere Sitzungen im kostenlosen Wochenvolumen ja. Intensive ganztägige Nutzung braucht meist Premium.' },
    ],
  },
  'smart-connect-vpn': {
    h1: 'Smart Connect VPN — automatisches Protokoll für iOS',
    lead:
      'Smart Connect ist der adaptive Modus von FollowNet: Er nutzt, wenn verfügbar, den Netzwerkkontext und wählt zwischen WireGuard, IKEv2, AmneziaWG, Hysteria2 und VLESS Reality — mit Ausweichstufen und Prüfungen des Ausgangsverkehrs, damit Sie weniger manuell ausprobieren müssen.',
    sections: [
      {
        title: 'So funktioniert Smart Connect',
        body:
          'Steht das Protokoll auf Smart, berücksichtigt FollowNet Hinweise zu Region und Anbieter vom Server, wählt einen Start-Tunnel und kann eine Ausweichkette durchlaufen (oft Hysteria2 → VLESS Reality → AmneziaWG → WireGuard → IKEv2, ohne Optionen, die Ihre Server nicht anbieten). Sobald Sie online sind, zeigt die App, was aktiv ist. Unter Einstellungen → Protokoll können Sie jederzeit selbst wählen.',
      },
      {
        title: 'Warum VLESS Reality in der Kette ist',
        body:
          'Manche Anbieter erkennen oder bremsen klassisches WireGuard — und sogar AmneziaWG. VLESS mit REALITY-Tarnung ist ein weiterer Weg, wenn ein Tunnel als verbunden angezeigt wird, aber keinen echten Datenverkehr durchlässt. FollowNet prüft den Ausgangsverkehr, bevor die Sitzung als gesund gilt.',
      },
      {
        title: 'Wann Smart Connect an bleiben sollte',
        body:
          'Reisende, restriktive Anbieter, Hotel-Uplinks und Reise-SIMs sind die typischen Fälle. Nehmen Sie das Profil „Restricted“, wenn Sie Smart Connect plus automatisches Verbinden „Immer“ und den schnellsten Server möchten, ohne jedes Protokoll zu betreuen.',
      },
      {
        title: 'Wann Sie ein Protokoll manuell wählen',
        body:
          'Ist WireGuard zu Hause schon schnell, legen Sie es fest. Nutzen Sie den manuellen Modus für Vergleiche im Speed Test. In unbekannten Café-, Flughafen- oder ausländischen SIM-Netzen wechseln Sie zurück zu Smart Connect (oder Restricted).',
      },
      {
        title: 'Smart Connect, automatisches Verbinden und Profile',
        body:
          'Automatisches Verbinden entscheidet, wann das VPN startet (WLAN, LTE, Immer). Smart Connect entscheidet, welcher Protokollweg danach versucht wird. Netzwerkprofile bündeln beides plus DNS und Servermodus — Public Wi‑Fi legt WireGuard fest, Travel IKEv2, Restricted lässt Smart Connect voll arbeiten.',
      },
      {
        title: 'Grenzen sowie Free-Wochenvolumen und Premium',
        body:
          'Smart Connect erhöht den Komfort; eine Verbindung in jedem Netz garantiert es nicht, und an einem übersprungenen Captive Portal kommt es nicht vorbei. Free enthält Smart Connect im Rahmen des Wochenvolumens. Premium hebt die Datenbegrenzung auf und schaltet die Premium-Standorte frei, die für diesen Tarif in der App stehen.',
      },
    ],
    bullets: [
      'Automatische Wahl zwischen WireGuard, IKEv2, AmneziaWG, Hysteria2 und VLESS Reality',
      'Ausweichkette mit Prüfung des Ausgangsverkehrs — nicht nur ein grüner Status',
      'Kombinierbar mit automatischem Verbinden und Netzwerkprofilen (inkl. Restricted)',
      'Aktives Protokoll und aktiver Server nach dem Verbinden sichtbar',
      'Im Free-Wochenvolumen und in Premium verfügbar',
    ],
    cta: CTA,
    faq: [
      { q: 'Wie schalte ich Smart Connect ein?', a: 'Einstellungen → Protokoll → Smart (die Bezeichnung kann je nach App-Version abweichen). Oder wenden Sie das Profil „Restricted“ an.' },
      { q: 'Sehe ich, welches Protokoll Smart Connect gewählt hat?', a: 'Ja. Die App zeigt nach dem Verbinden das aktive Protokoll und den Server.' },
      { q: 'Nutzt Smart Connect VLESS Reality?', a: 'Ja, wenn das Protokoll für Ihre Sitzung verfügbar ist und Netzwerkkontext oder Ausweichstufen es nahelegen. Sie können VLESS auch manuell festlegen.' },
      { q: 'Garantiert Smart Connect überall Zugang?', a: 'Nein. Es verbessert die Chancen in schwierigen Netzen, setzt aber keine lokalen Gesetze, vollständigen Sperren oder defekten Hotspots außer Kraft.' },
    ],
  },
  'network-profiles-ios': {
    h1: 'Netzwerkprofile auf iOS — Smart, Public Wi‑Fi, Travel, Restricted',
    lead:
      'Ein FollowNet-Profil bündelt Protokoll, DNS, automatisches Verbinden und Servermodus, damit Café und Heim-WLAN nicht dieselben Voreinstellungen teilen. Die eingebauten Vorlagen entsprechen genau dem, was in der App steckt.',
    sections: [
      {
        title: 'Was ein Profil speichert',
        body:
          'Einstellungen → Netzwerkprofile setzt vier Regler auf einmal: bevorzugtes Protokoll (oder Smart), DNS-Vorlage, Modus für automatisches Verbinden und Servermodus (Schnellster / Zuletzt genutzt / Bestimmter). Wenden Sie ein Profil an, statt bei jedem neuen WLAN vier Menüs neu einzustellen.',
      },
      {
        title: 'Smart (Standard)',
        body:
          'Protokoll: Smart · DNS: System/Standard · Automatisch verbinden: Aus · Server: Zuletzt genutzt. Der Alltagsstart, wenn FollowNet den Tunnel wählen und sich wieder mit der letzten Stadt verbinden soll.',
      },
      {
        title: 'Public Wi‑Fi',
        body:
          'Protokoll: WireGuard · DNS: Quad9 · Automatisch verbinden: Nur WLAN · Server: Schnellster. Nach dem Captive Portal verschlüsseln Sie in geteilten Hotspots mit niedriger Latenz und einem datenschutzorientierten Resolver.',
      },
      {
        title: 'Travel',
        body:
          'Protokoll: IKEv2 · DNS: Cloudflare · Automatisch verbinden: Immer · Server: Schnellster. Abgestimmt auf Roaming und Wechsel zwischen LTE und Hotel-WLAN — langweilige Zuverlässigkeit statt neuester Protokolle.',
      },
      {
        title: 'Restricted und eigene Profile',
        body:
          'Restricted lässt das Protokoll auf Smart, DNS Quad9, automatisches Verbinden Immer, Server Schnellster — für Netze mit Deep Packet Inspection, in denen Smart Connect die ganze Kette (Hysteria2 / VLESS Reality / AmneziaWG / WireGuard / IKEv2) nutzen soll. Legen Sie ein eigenes Profil an, wenn ein Hotel nur mit festem Protokoll, DNS und bestimmter Stadt funktioniert.',
      },
    ],
    bullets: [
      'Vier eingebaute Vorlagen mit festem Protokoll / DNS / automatischem Verbinden / Servermodus',
      'Restricted = Smart + Immer + Schnellster für feindliche Netze',
      'Eigene Profile für Hotel- oder Büro-Rezepte, die Sie schon getestet haben',
      'Dieselben Werkzeuge in Free mit Wochenvolumen und in Premium',
      'Kombinierbar mit dem Kurzbefehl „Profil anwenden“',
    ],
    cta: CTA,
    faq: [
      { q: 'Wo finde ich die Netzwerkprofile?', a: 'In der FollowNet-App für iOS: Einstellungen → Netzwerkprofile (und im Profilmenü auf dem Hauptbildschirm).' },
      { q: 'Nutzt Restricted VLESS?', a: 'Restricted lässt das Protokoll auf Smart, sodass Smart Connect bis zu VLESS Reality wechseln kann, wenn dieser Weg verfügbar ist — es legt kein einzelnes Protokoll fest.' },
      { q: 'Sind Profile nur in Premium verfügbar?', a: 'Die eingebauten Vorlagen gibt es auch in Free im Rahmen des Wochenvolumens. Premium bringt vor allem mehr Kapazität und eine größere Serverkarte.' },
      { q: 'Was ist der Unterschied zu Smart Connect allein?', a: 'Smart Connect wählt das Protokoll. Ein Profil setzt zusätzlich DNS, automatisches Verbinden und Servermodus mit einem Tipp.' },
    ],
  },
  'amneziawg-vpn-ios': {
    h1: 'AmneziaWG VPN für iOS — verbessertes WireGuard für instabile Netze',
    lead:
      'AmneziaWG ist ein verbessertes, auf WireGuard basierendes Protokoll für instabile oder überlastete Netze. FollowNet enthält AmneziaWG auf iOS und kann es über Smart Connect automatisch aktivieren.',
    sections: [
      { title: 'Warum ein zusätzliches Protokoll hilft', body: 'Manche Mobilfunkanbieter sowie Hotel- und öffentliche WLANs gehen schlecht mit normalem VPN-Verkehr um — Verbindungen brechen ab oder werden langsam. AmneziaWG behält den WireGuard-Kern und ergänzt Verbindungsanpassungen, die in solchen Netzen stabiler bleiben können.' },
      { title: 'AmneziaWG in FollowNet nutzen', body: 'Aktivieren Sie Smart Connect für den automatischen Wechsel oder wählen Sie AmneziaWG manuell unter Einstellungen → Protokoll. Die Leistung kann von reinem WireGuard abweichen; der Speed Test hilft beim Vergleich.' },
    ],
    bullets: ['Auf WireGuard basierendes Protokoll für instabile Netze', 'Über Smart Connect oder manuell wählbar', 'Verfügbare Server werden in der App angezeigt', 'Native iOS Network Extension'],
    cta: CTA,
    faq: [
      { q: 'Ist AmneziaWG dasselbe wie WireGuard?', a: 'Es basiert auf WireGuard und ergänzt Verbindungsanpassungen für Netze, in denen normales WireGuard instabil ist.' },
      { q: 'Wann sollte ich AmneziaWG nutzen?', a: 'Wenn WireGuard in Ihrem Netz instabil oder langsam ist — zum Beispiel mit manchen Reise-SIMs oder in vollen öffentlichen WLANs.' },
      { q: 'Ist AmneziaWG im kostenlosen Tarif enthalten?', a: 'Welche Protokolle verfügbar sind, hängt von Ihrem Tarif ab; die aktuellen Grenzen von Free und Premium stehen in der App.' },
    ],
  },
  'no-logs-vpn': {
    h1: 'VPN-Datenschutz auf dem iPhone — mehr als „No-Logs“-Slogans',
    lead:
      'FollowNet will so wenig Daten wie möglich erheben. In unserer Datenschutzerklärung steht genau, was für Kontozugang, VPN-Betrieb, Support und Analyse verarbeitet wird — statt eines absoluten „Zero Logs“-Werbespruchs.',
    sections: [
      {
        title: 'Was Datenschutzversprechen praktisch bedeuten',
        body:
          'Ein VPN mit Konto kann nicht mit buchstäblich null Daten arbeiten: Anmeldung per E-Mail und Abo-Status brauchen Metadaten. Absolute „No-Logs“-Slogans verschleiern das. Die veröffentlichte Datenschutzerklärung legt fest, wie FollowNet heute mit Daten umgeht und wie lange sie gespeichert werden.',
      },
      {
        title: 'Was Sie vor dem Verbinden lesen sollten',
        body:
          'Unsere Datenschutzerklärung behandelt Datenkategorien, Zwecke, Speicherdauer, Rechte nach DSGVO und CCPA, die Nutzung von Firebase Analytics, DNS und Support-Anfragen. Verlassen Sie sich auf dieses Dokument statt auf Kurzfassungen auf Landingpages — auch auf diese.',
      },
      {
        title: 'Konto, Abrechnung und Apple',
        body:
          'FollowNet nutzt die Anmeldung per E-Mail-Code. Premium wird über den App Store von Apple abgerechnet. Apple verarbeitet die Abo-Zahlungen; der VPN-Tunnel läuft in der Sandbox der iOS Network Extension. Wir behaupten keine externen „No-Logs-Audits“, die wir hier nicht veröffentlicht haben.',
      },
      {
        title: 'Praktische Datenschutz-Gewohnheiten auf dem iPhone',
        body:
          'Halten Sie iOS aktuell, nutzen Sie einen starken Code oder Face ID, aktivieren Sie automatisches Verbinden im öffentlichen WLAN und prüfen Sie die DNS-Profile, wenn Sie einen bestimmten Resolver möchten. Ein VPN verschlüsselt den Weg zum VPN-Server; Wachsamkeit gegenüber Phishing und Gerätepflege ersetzt es nicht.',
      },
      {
        title: 'Free, Premium und Transparenz',
        body:
          'Für Free und Premium gilt dieselbe Datenschutzerklärung. Free enthält ein Wochenvolumen zum Testen; Premium hebt die Begrenzung auf. Tarifgrenzen und Standorte stehen in der App — nicht als erfundene Werbezahlen auf dieser Seite.',
      },
    ],
    bullets: [
      'Datenschutzerklärung unter follow-net.com/privacy — die maßgebliche Quelle',
      'Anmeldung per E-Mail-Code; keine Versprechen von „null Daten“',
      'Datenkategorien und Speicherdauer in der Erklärung beschrieben',
      'Premium-Abrechnung über Apple',
      'Dieselbe Ehrlichkeit bei Free und Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'Was verarbeitet FollowNet?', a: 'Die genauen Datenkategorien, Zwecke und Speicherfristen stehen in der aktuellen Datenschutzerklärung.' },
      { q: 'Wo finde ich die Datenschutzerklärung?', a: 'Unter https://follow-net.com/privacy — verlinkt in der App und im App-Store-Eintrag.' },
      { q: 'Gibt es ein formales No-Logs-Audit?', a: 'Verlassen Sie sich nicht auf Audit-Slogans auf dieser Seite. Was wir heute verarbeiten, steht in der veröffentlichten Datenschutzerklärung.' },
      { q: 'Sieht Apple meine VPN-Nutzung?', a: 'Apple verarbeitet die App-Store-Abos; der VPN-Tunnel läuft in der Sandbox der iOS Network Extension. Die für den Datenschutz relevanten Details stehen in unserer Datenschutzerklärung.' },
    ],
  },
  'best-vpn-iphone': {
    h1: 'Bestes VPN fürs iPhone — worauf es 2026 ankommt',
    lead:
      'Das beste iPhone-VPN für Sie ist nativ für iOS, offen beim Datenschutz, schnell in Ihren Netzen und ehrlich bei Free und Bezahltarif. Hier ist eine praktische Checkliste und wie FollowNet dazu passt — ohne zu behaupten, für alle die Nummer 1 zu sein.',
    sections: [
      {
        title: 'Checkliste für iPhone-VPN-Apps',
        body:
          'Bevorzugen Sie Apps aus dem App Store, ein echtes VPN über die Network Extension (kein reines Browser-„VPN“), eine klare Datenschutzerklärung, moderne Protokolle (WireGuard/IKEv2 und Optionen für gefilterte Netze), automatisches Verbinden und einen erreichbaren Support. Meiden Sie Apps ohne nachprüfbares Unternehmen oder ohne Datenschutzerklärung.',
      },
      {
        title: 'Wie FollowNet bei dieser Checkliste abschneidet',
        body:
          'FollowNet ist eine native iOS-App mit WireGuard, IKEv2, AmneziaWG, Hysteria2, Smart Connect, automatischem Verbinden, eigenem DNS, Speed Test, Widgets und Kurzbefehlen. Free enthält ein Wochenvolumen; Premium ist optional über Apple. Die Standorte stehen in der App.',
      },
      {
        title: 'Vor dem Abo testen',
        body:
          'Installieren Sie Free, bestätigen Sie die VPN-Konfiguration, starten Sie den Speed Test mit und ohne VPN im Heim-WLAN und im Mobilfunk und probieren Sie dann ein Café-WLAN mit Smart Connect. Passen Tempo und Zuverlässigkeit, hebt Premium das wöchentliche Free-Limit auf.',
      },
      {
        title: 'Was „das Beste“ nicht heißen sollte',
        body:
          'Vorsicht bei garantiert freigeschalteten Streaming-Katalogen, „Servern in jedem Land“, absoluten No-Logs-Slogans ohne Datenschutzerklärung und erfundenen Server-Zahlen. FollowNet verspricht nichts davon. Die Verfügbarkeit hängt von Ihrem Netz und lokalen Regeln ab.',
      },
      {
        title: 'Free oder Premium — die Entscheidung',
        body:
          'Wählen Sie Free für gelegentlichen Schutz im öffentlichen WLAN und zum Testen. Wählen Sie Premium für unbegrenztes Datenvolumen und die Premium-Standorte Ihres Tarifs. Die Qualität der Verschlüsselung steht nicht hinter einer Bezahlschranke — Kapazität und Standorte schon.',
      },
    ],
    bullets: [
      'Native Network Extension aus dem App Store — kein nachgeladenes Profil',
      'WireGuard + IKEv2 + Smart Connect + AmneziaWG + Hysteria2',
      'Automatisches Verbinden, DNS, Speed Test und Widgets für den Alltag',
      'Free-Wochenvolumen zum Testen — Premium optional',
      'Datenschutzerklärung statt Werbeslogans',
    ],
    cta: CTA,
    faq: [
      { q: 'Ist FollowNet für alle das beste VPN?', a: 'Kein VPN passt zu allen. FollowNet konzentriert sich auf iOS, moderne Protokolle und Smart Connect — testen Sie mit dem kostenlosen Wochenvolumen, ob Tempo und Server für Sie passen.' },
      { q: 'Warum der Fokus auf iOS?', a: 'FollowNet setzt auf ein ausgereiftes Erlebnis auf iPhone und iPad und ergänzt es mit einer Chrome-Erweiterung für den Desktop, statt sich auf allen Plattformen zu verzetteln.' },
      { q: 'Wie vergleiche ich die Geschwindigkeit?', a: 'Nutzen Sie den eingebauten Speed Test mit und ohne VPN in Ihren üblichen WLAN- und Mobilfunknetzen.' },
      { q: 'Schaltet es jeden Streaming-Katalog frei?', a: 'Nein. FollowNet verschlüsselt Ihre Verbindung und bietet die in der App gelisteten regionalen Ausgänge; Kataloge können VPN-Nutzer trotzdem einschränken.' },
    ],
  },
  'auto-connect-vpn-ios': {
    h1: 'VPN automatisch verbinden auf iOS — beim Netzwechsel',
    lead:
      'Das automatische Verbinden von FollowNet startet das VPN selbstständig im WLAN, im Mobilfunk oder in jedem Netz — Sie müssen nicht jedes Mal auf Verbinden tippen, wenn Sie einen Hotspot betreten oder von WLAN auf LTE wechseln.',
    sections: [
      { title: 'Warum automatisch verbinden auf dem iPhone?', body: 'Gerade im öffentlichen WLAN und auf Reisen braucht man ein VPN am meisten — und vergisst es am häufigsten. Das automatische Verbinden beobachtet Ihr Netz und startet FollowNet, sobald Ihre Regel greift.' },
      { title: 'Modi für automatisches Verbinden in FollowNet', body: 'Wählen Sie unter Einstellungen → Automatisch verbinden zwischen Aus, Nur WLAN, Nur LTE und Immer. Kombinieren Sie das mit Smart Connect, damit nach dem Start das passende Protokoll und der passende Server gewählt werden.' },
    ],
    bullets: ['Nur WLAN, Nur LTE oder Immer', 'Funktioniert mit WireGuard, IKEv2 und Smart Connect', 'In Free und Premium verfügbar', 'Einrichtung unter Einstellungen → Automatisch verbinden'],
    cta: CTA,
    faq: [
      { q: 'Wie aktiviere ich das automatische Verbinden?', a: 'Öffnen Sie FollowNet → Einstellungen → Automatisch verbinden und wählen Sie Nur WLAN, Nur LTE, Immer oder Aus.' },
      { q: 'Startet es auch im Heim-WLAN?', a: 'Nur wenn Sie „Nur WLAN“ oder „Immer“ wählen. Viele nutzen „Nur WLAN“ für Cafés und Hotels.' },
      { q: 'Ist das dasselbe wie Smart Connect?', a: 'Nein. Das automatische Verbinden entscheidet, wann das VPN startet; Smart Connect wählt danach Protokoll und Server.' },
    ],
  },
  'dns-vpn-ios': {
    h1: 'Eigenes DNS mit VPN auf dem iPhone — Quad9, Cloudflare und mehr',
    lead:
      'Mit FollowNet wählen Sie DNS-Profile auf iOS: beim System-DNS bleiben oder bei aktivem VPN-Tunnel zu Quad9, Cloudflare, AdGuard und weiteren Vorlagen wechseln.',
    sections: [
      { title: 'Warum DNS beim VPN wichtig ist', body: 'DNS übersetzt Domainnamen in IP-Adressen. Manche Nutzer möchten zusätzlich zur VPN-Verschlüsselung einen Resolver, der Schadsoftware blockiert (Quad9), ein schnelles öffentliches DNS (Cloudflare) oder ein DNS mit Werbefilter (AdGuard).' },
      { title: 'DNS-Profile in FollowNet', body: 'Wählen Sie eine DNS-Vorlage in den Einstellungen, ohne die App zu verlassen. Je nach Konfiguration laufen DNS-Anfragen durch den VPN-Tunnel — Details zur Verarbeitung stehen in der Datenschutzerklärung.' },
    ],
    bullets: ['Mehrere DNS-Vorlagen eingebaut', 'Funktioniert zusammen mit WireGuard und IKEv2', 'Hilfreich für Datenschutz- und Filterziele', 'Keine separate DNS-App nötig'],
    cta: CTA,
    faq: [
      { q: 'Welches DNS sollte ich nutzen?', a: 'Quad9 mit Fokus auf Sicherheit, Cloudflare für Tempo, AdGuard DNS gegen Werbung — oder den Systemstandard.' },
      { q: 'Ersetzt eigenes DNS die VPN-Verschlüsselung?', a: 'Nein. DNS ändert nur den Resolver; das VPN verschlüsselt weiterhin den Weg zum VPN-Server.' },
      { q: 'Kann ich DNS-Profile in Free nutzen?', a: 'Die DNS-Einstellungen stehen gemäß Ihrem aktuellen Tarif in der App zur Verfügung.' },
    ],
  },
  'vpn-for-travel': {
    h1: 'VPN für Reisen auf dem iPhone — Roaming, Hotels und Flughäfen',
    lead:
      'Reisen bedeutet unbekannte WLANs, ausländische SIM-Karten und manchmal gefilterte Netze. FollowNet behält denselben iOS-Ablauf bei, während Smart Connect ein passendes Protokoll für das aktuelle Netz wählt.',
    sections: [
      { title: 'Typische Reiseszenarien', body: 'Lounge-WLAN am Flughafen, Captive Portals im Hotel und lokale Prepaid-SIMs verhalten sich alle unterschiedlich. Das VPN hilft beim Datenschutz; Smart Connect hilft bei der Verbindung, wenn Protokolle im Ausland eingeschränkt sind.' },
      { title: 'Tipps für Reisende', body: 'Laden Sie FollowNet vor der Abreise, melden Sie sich per E-Mail an, testen Sie den Speed Test im WLAN und im Mobilfunk und aktivieren Sie automatisches Verbinden in nicht vertrauenswürdigen Netzen. Welche Standorte Ihr Tarif enthält, sehen Sie in der App.' },
    ],
    bullets: ['Mehrere Standorte in der App gelistet', 'Smart Connect für unbekannte Netze', 'Automatisch verbinden im Hotel- und Flughafen-WLAN', 'Vor der Reise installieren und testen'],
    cta: CTA,
    faq: [
      { q: 'Funktioniert das VPN in jedem Land?', a: 'Das hängt von lokalen Gesetzen und Netzrichtlinien ab. Nutzer sind selbst dafür verantwortlich, lokale Vorschriften einzuhalten.' },
      { q: 'Vor oder nach der Anmeldung im Hotel-WLAN verbinden?', a: 'In der Regel nach dem Captive Portal; danach das VPN für den Rest der Sitzung aktiv lassen.' },
      { q: 'Kostet Roaming mit VPN mehr?', a: 'Ein VPN erzeugt etwas zusätzlichen Datenverkehr; Roaminggebühren hängen von Ihrem Mobilfunktarif ab, nicht von FollowNet.' },
    ],
  },
  'vpn-speed-test-ios': {
    h1: 'VPN-Speed-Test fürs iPhone — erst messen, dann entscheiden',
    lead:
      'FollowNet enthält einen Speed Test, mit dem Sie auf iOS Download-Tempo und Latenz mit und ohne VPN sowie zwischen Standorten vergleichen — bevor Sie auf Premium wechseln.',
    sections: [
      { title: 'Warum das VPN-Tempo auf iOS testen?', body: 'Das Tempo hängt von Ihrem Grundnetz, der Entfernung zum Server und dem Protokoll ab. Ein Test in Ihrem echten WLAN und LTE sorgt für realistische Erwartungen — besonders für Streaming und Videoanrufe auf dem iPad.' },
      { title: 'So nutzen Sie den Speed Test in FollowNet', body: 'Öffnen Sie den Speed Test in der App, messen Sie zuerst ohne VPN, verbinden Sie dann und testen Sie erneut. Weichen die Werte bei Ihrem Anbieter ab, vergleichen Sie Smart Connect mit manuellem WireGuard oder IKEv2.' },
    ],
    bullets: ['In FollowNet eingebaut — keine Drittanbieter-App', 'Server und Protokolle vergleichen', 'Nützlich in Free und Premium', 'Läuft auf iPhone und iPad'],
    cta: CTA,
    faq: [
      { q: 'Ist ein VPN immer langsamer?', a: 'Etwas Overhead durch Verschlüsselung und Serverentfernung ist normal. Ein naher Server hält den Unterschied meist klein.' },
      { q: 'Welches Protokoll ist am schnellsten?', a: 'In guten Netzen oft WireGuard — das variiert jedoch, also messen Sie lokal mit dem Speed Test.' },
      { q: 'Verbraucht der Speed Test mein Datenvolumen?', a: 'Ja. Tests verbrauchen Daten wie jeder Download — denken Sie daran beim kostenlosen Wochenlimit.' },
    ],
  },
  'secure-vpn-iphone': {
    h1: 'Sicheres VPN fürs iPhone — Verschlüsselung, automatisches Verbinden und DNS',
    lead:
      'Sicherheit auf iOS ist mehr als ein Schloss-Symbol. FollowNet kombiniert Verschlüsselung per WireGuard oder IKEv2, optionales automatisches Verbinden, eigenes DNS und eine veröffentlichte Datenschutzerklärung.',
    sections: [
      { title: 'Schutz in mehreren Schichten', body: 'Das VPN verschlüsselt den Datenverkehr bis zum VPN-Server. Das automatische Verbinden startet das VPN im öffentlichen WLAN oder Mobilfunk ohne manuelles Tippen. DNS-Profile können Resolver mit Filtern oder Datenschutzfokus ergänzen. Zusammen machen sie die tägliche iPhone-Nutzung in fremden Netzen robuster.' },
      { title: 'Bewährte Sicherheitspraxis', body: 'Halten Sie iOS aktuell, nutzen Sie einen starken Code oder Face ID, aktivieren Sie automatisches Verbinden im öffentlichen WLAN und lesen Sie die Datenschutzerklärung von FollowNet. Premium bedeutet nicht „mehr Verschlüsselung“ — es schaltet Kapazität und Server frei.' },
    ],
    bullets: ['Moderne Protokolle: WireGuard, IKEv2, AmneziaWG', 'Automatisch verbinden im WLAN oder LTE', 'Eigene DNS-Vorlagen', 'App-Store-Prüfung und VPN-Erweiterung in der Sandbox'],
    cta: CTA,
    faq: [
      { q: 'Ist FollowNet sicher fürs Onlinebanking auf dem iPhone?', a: 'Das VPN ergänzt die Transportverschlüsselung, nutzen Sie aber offizielle Banking-Apps und HTTPS-Seiten. FollowNet ersetzt keine Gerätesicherheit.' },
      { q: 'Heißt sicheres VPN „Militärstandard“?', a: 'Werbebegriffe sind unterschiedlich. FollowNet nutzt gängige moderne VPN-Protokolle — Einzelheiten stehen in unseren Unterlagen und der Datenschutzerklärung.' },
      { q: 'Schützt ein VPN vor Phishing?', a: 'Nein. Das VPN verschlüsselt den Datenverkehr; bösartige Links oder gefälschte Anmeldeseiten blockiert es nicht.' },
    ],
  },
  'hysteria2-vpn-ios': {
    h1: 'Hysteria2 VPN für iOS — ein weiterer Weg, wenn Netze Tunnel ausbremsen',
    lead:
      'FollowNet enthält Hysteria2 auf iPhone und iPad neben WireGuard, IKEv2 und AmneziaWG. Nutzen Sie es manuell oder lassen Sie Smart Connect ein Protokoll wählen, wenn Ihr Netz verlustbehaftet ist oder klassischen VPN-Verkehr behindert.',
    sections: [
      { title: 'Wann Hysteria2 auf iOS hilft', body: 'Manche Hotel-Uplinks, Reise-SIMs und gefilterten Anbieter verschlechtern WireGuard oder lassen den Verbindungsaufbau hängen. Hysteria2 ist ein praktischer alternativer Weg im klassischen VPN-Stack von FollowNet — kein Mixnet und keine Garantie für Zugang überall.' },
      { title: 'So aktivieren Sie Hysteria2', body: 'Öffnen Sie Einstellungen → Protokoll und wählen Sie Hysteria2 oder lassen Sie Smart Connect für die automatische Wahl an. Starten Sie nach dem Wechsel den Speed Test im selben WLAN oder LTE, um echte Werte statt Vermutungen zu vergleichen.' },
    ],
    bullets: ['Hysteria2 neben WireGuard, IKEv2 und AmneziaWG', 'Smart Connect kann es in schwierigen Netzen wählen', 'Manuelle Wahl jederzeit möglich', 'Funktioniert mit Free-Wochenlimit und Premium'],
    cta: CTA,
    faq: [
      { q: 'Ist Hysteria2 besser als WireGuard?', a: 'Nicht immer. In ruhigen Netzen ist WireGuard oft am schnellsten; Hysteria2 hilft, wenn diese Wege scheitern. Messen Sie lokal mit dem Speed Test.' },
      { q: 'Nutzt Smart Connect auch Hysteria2?', a: 'Smart Connect bewertet die Netzbedingungen und kann zwischen den von FollowNet unterstützten Protokollen wählen, einschließlich Hysteria2, wo es passt.' },
      { q: 'Ist Hysteria2 in Free enthalten?', a: 'Die verfügbaren Protokolle richten sich nach Ihrem Tarif in der App. Auch Free nutzt dieselben modernen Protokolle im Rahmen des Wochenvolumens.' },
    ],
  },
  'vpn-chrome-extension': {
    h1: 'FollowNet VPN-Erweiterung für Chrome — Surfen am Desktop, dasselbe Konto',
    lead:
      'Sie brauchen FollowNet auch abseits des iPhones? Die Chrome-Erweiterung schützt den Browserverkehr in Chrome am Desktop mit demselben Konto und ehrlichen Grenzen für Free und Premium — während die iOS-App das systemweite VPN fürs ganze Gerät bleibt.',
    sections: [
      {
        title: 'Wofür die Erweiterung da ist',
        body:
          'Die Chrome-Erweiterung schützt das Surfen in Chrome (oder unterstützten Chromium-Browsern) am Computer. Melden Sie sich mit Ihrem FollowNet-E-Mail-Code an, wählen Sie einen Standort Ihres Tarifs und halten Sie das Popup schlank. Es ist ein Proxy für den Browser — kein vollständiges System-VPN für alle Apps unter macOS oder Windows.',
      },
      {
        title: 'Was sie nicht abdeckt',
        body:
          'Datenverkehr außerhalb des unterstützten Browsers — Desktop-Apps, andere Browser, Systemupdates — schützt die Erweiterung nicht. Für den Schutz des ganzen Geräts auf Telefon oder Tablet nutzen Sie die FollowNet-App für iOS mit Network Extension.',
      },
      {
        title: 'Zusammenspiel mit dem iPhone',
        body:
          'Nutzen Sie die iOS-App für automatisches Verbinden, Widgets, Mobilfunk, Netzwerkprofile und das VPN für alle Apps. Nutzen Sie Chrome, wenn Sie am Computer arbeiten. Ein Konto verbindet beides; Free-Wochenvolumen, Premium und Geräteplätze hängen am Konto.',
      },
      {
        title: 'Kill Switch, Werbefilter und Routing',
        body:
          'Der Kill Switch soll verhindern, dass Chrome bei einem Proxy-Ausfall Daten am Tunnel vorbei sendet (nur im Browser, nicht im ganzen Betriebssystem). Optionale Listen im Stil von EasyList / AdGuard reduzieren Werbung und Tracker. Das Website-Routing kann ausgewählte Hosts über den Proxy leiten, während andere Tabs direkt bleiben — weiterhin nur in Chrome.',
      },
      {
        title: 'Einrichtung in wenigen Schritten',
        body:
          'Installieren Sie die FollowNet-Erweiterung aus dem Chrome Web Store, melden Sie sich mit demselben E-Mail-Code wie auf iOS an, wählen Sie einen Server aus den Standorten Ihres Tarifs und verbinden Sie. Klappt etwas nicht, prüfen Sie, ob Sie angemeldet sind und noch Free-Wochenvolumen übrig ist.',
      },
      {
        title: 'Free-Wochenvolumen oder Premium',
        body:
          'Free enthält ein wöchentliches Datenvolumen, damit Sie das Surfen am Desktop vor dem Bezahlen testen können. Premium hebt die Begrenzung gemäß Ihrem Abo auf. Kein Tarif macht die Erweiterung zu einem systemweiten Desktop-VPN.',
      },
    ],
    bullets: [
      'Dasselbe FollowNet-Konto wie auf iOS',
      'Browser-Proxy + Kill Switch — kein VPN fürs ganze Desktop-Gerät',
      'Optionaler Werbefilter im Stil von EasyList / AdGuard',
      'Free-Wochenvolumen zum Testen',
      'Premium optional für unbegrenzten Traffic zu den aktuellen Bedingungen',
    ],
    cta: 'Chrome-Erweiterung installieren',
    faq: [
      { q: 'Ersetzt die Chrome-Erweiterung die iPhone-App?', a: 'Nein. Das iOS-VPN schützt das ganze Telefon; Chrome schützt den Browserverkehr am Desktop.' },
      { q: 'Kann ich Free in Chrome nutzen?', a: 'Ja. Free enthält ein Wochenvolumen zum Testen; Premium hebt die Begrenzung gemäß Ihrem Abo auf.' },
      { q: 'Schützt die Erweiterung Slack, Zoom oder andere Desktop-Apps?', a: 'Nein. Sie deckt nur den Verkehr im unterstützten Browser ab. Für jede App brauchen Sie ein System-VPN — auf dem Telefon ist das die FollowNet-App für iOS.' },
      { q: 'Gibt es eine VPN-App für macOS?', a: 'FollowNet konzentriert sich derzeit auf iOS und die Chrome-Erweiterung, statt auf einen vollständigen macOS-Client zu warten.' },
    ],
  },
  'vpn-widgets-ios': {
    h1: 'VPN-Widgets für iOS — FollowNet-Status auf dem Home-Bildschirm',
    lead:
      'FollowNet-Widgets zeigen den Verbindungsstatus auf iPhone und iPad auf einen Blick, sodass Sie wissen, ob der Tunnel steht, ohne jedes Mal die App zu öffnen.',
    sections: [
      { title: 'Warum VPN-Widgets helfen', body: 'Öffentliches WLAN und automatisches Verbinden nützen nur, wenn Sie merken, dass das VPN nicht gestartet ist. Widgets zeigen den Status neben Ihren anderen Kacheln — Status zuerst, kein Mini-Dashboard mit Werbekennzahlen.' },
      { title: 'Widgets mit automatischem Verbinden kombinieren', body: 'Stellen Sie das automatische Verbinden in den Einstellungen auf Nur WLAN, Nur LTE oder Immer und prüfen Sie dann per Widget, ob der Tunnel nach dem Netzbeitritt steht. Das Protokoll wählen Sie weiterhin in den Einstellungen oder per Smart Connect.' },
    ],
    bullets: ['Status auf dem Home-Bildschirm, ohne die App zu öffnen', 'Passt zu Gewohnheiten mit automatischem Verbinden', 'Native iOS-App aus dem App Store', 'Kostenlos testen — Premium optional'],
    cta: CTA,
    faq: [
      { q: 'Welche iOS-Versionen unterstützen die FollowNet-Widgets?', a: 'Die Widget-Unterstützung folgt den Anforderungen der aktuellen App-Store-Version — halten Sie FollowNet und iOS aktuell.' },
      { q: 'Kann ich direkt aus dem Widget verbinden?', a: 'Widgets stehen für Status und einen schnellen Weg in die App. Die vollständige Steuerung bleibt in FollowNet und in den VPN-Dialogen des Systems.' },
      { q: 'Verbrauchen Widgets zusätzlich Akku?', a: 'Widgets sind leichte Statusanzeigen; den Akkuverbrauch des VPN verursacht der aktive Tunnel, nicht die Kachel.' },
    ],
  },
  'how-to-setup-vpn-iphone': {
    h1: 'VPN auf dem iPhone einrichten — mit FollowNet',
    lead:
      'Installieren Sie FollowNet aus dem App Store, melden Sie sich mit einem E-Mail-Code an, erlauben Sie einmal die VPN-Konfiguration und verbinden Sie mit einem Tipp — Free-Wochenvolumen inklusive, Premium, wenn Sie unbegrenzt brauchen.',
    sections: [
      {
        title: 'Einrichtung Schritt für Schritt',
        body:
          '1) FollowNet aus dem App Store laden. 2) Mit dem Bestätigungscode per E-Mail anmelden. 3) Den iOS-Dialog zur VPN-Konfiguration bestätigen. 4) Auf Verbinden tippen oder Smart Connect aktivieren. 5) Optional automatisches Verbinden, DNS-Profile und ein Widget auf dem Home-Bildschirm einrichten.',
      },
      {
        title: 'Was die iOS-VPN-Berechtigung bedeutet',
        body:
          'Apple verlangt für VPN-Apps mit Network Extension eine ausdrückliche Erlaubnis. Sie fügen eine von FollowNet verwaltete System-VPN-Konfiguration hinzu — kein beliebiges nachgeladenes Profil. Nach dem Deinstallieren können Sie sie unter iOS-Einstellungen → VPN entfernen.',
      },
      {
        title: 'Tipps für den ersten Start',
        body:
          'Testen Sie vor der Reise im Heim-WLAN. Starten Sie den Speed Test mit und ohne VPN. Wählen Sie einen nahen Standort aus der App. Scheitert WireGuard in einem restriktiven Netz, lassen Sie Smart Connect an oder probieren Sie AmneziaWG, IKEv2 oder Hysteria2 unter Einstellungen → Protokoll.',
      },
      {
        title: 'Empfohlene Einstellungen nach dem Verbinden',
        body:
          'Für Cafés und Hotels stellen Sie das automatische Verbinden auf „Nur WLAN“. Lassen Sie Smart Connect auf Reisen an. Fügen Sie ein Widget hinzu, um den Status zu prüfen. Ändern Sie das DNS nur, wenn Sie einen bestimmten Resolver möchten — die VPN-Verschlüsselung ersetzt es nicht.',
      },
      {
        title: 'Free-Wochenvolumen oder Premium nach der Einrichtung',
        body:
          'Free funktioniert sofort ohne Kreditkarte und enthält ein Wochenvolumen zum Testen. Reicht es nicht mehr, wechseln Sie im App Store zu Premium für unbegrenzten Traffic und die Premium-Standorte, die für diesen Tarif angezeigt werden. Freigeschaltetes Streaming ist in keinem Tarif garantiert.',
      },
    ],
    bullets: [
      'Installation aus dem App Store — keine Konfigurationsprofile zum Nachladen',
      'Anmeldung ohne Passwort per E-Mail',
      'Network Extension einmal erlauben, dann verbinden',
      'Smart Connect, automatisches Verbinden, DNS, Speed Test, Widgets',
      'Free-Wochenlimit zum Testen vor Premium',
    ],
    cta: CTA,
    faq: [
      { q: 'Brauche ich für die Einrichtung eine Kreditkarte?', a: 'Nein. FollowNet Free funktioniert ohne Karte. Premium ist optional über den App Store.' },
      { q: 'Warum fragt iOS nach einer VPN-Konfiguration?', a: 'Apple verlangt eine ausdrückliche Erlaubnis für VPN-Apps mit Network Extension. Das ist bei App-Store-VPNs normal.' },
      { q: 'Kann ich dasselbe Konto auf iPad und in Chrome nutzen?', a: 'Ja. Melden Sie sich auf dem iPad und in der Chrome-Erweiterung mit derselben E-Mail an.' },
      { q: 'Die Einrichtung ist fehlgeschlagen oder das VPN verbindet nicht — was nun?', a: 'Prüfen Sie, ob die VPN-Konfiguration erlaubt ist, probieren Sie Smart Connect, wechseln Sie Protokoll oder Standort aus der App und testen Sie in einem anderen Netz, falls ein Captive Portal im Spiel ist.' },
    ],
  },
  'vpn-for-gaming-iphone': {
    h1: 'VPN fürs Gaming auf dem iPhone — Latenz, Protokolle und wann man es lässt',
    lead:
      'Nutzen Sie FollowNet auf dem iPhone, wenn Sie in fremden Netzen verschlüsselt mobil spielen möchten — und messen Sie die Latenz mit dem Speed Test, um zu sehen, ob WireGuard oder ein anderes Protokoll sich lohnt.',
    sections: [
      { title: 'Wann ein Gaming-VPN hilft', body: 'Öffentliches WLAN, Reise-SIMs und datenschutzsensible Sitzungen sind gute Gründe, Spieldaten zu tunneln. WireGuard ist wegen des geringen Overheads meist der erste Versuch; IKEv2 hilft, wenn Sie mitten im Match zwischen LTE und WLAN wechseln.' },
      { title: 'Wann Sie das VPN ausschalten sollten', body: 'Zeigt der Speed Test einen großen Latenzsprung zu einem fernen Server, fühlt sich Gaming mit VPN eventuell schlechter an. Wählen Sie einen näheren Ausgang, probieren Sie Smart Connect oder trennen Sie im vertrauten Heimnetz. FollowNet erfindet keine bessere Route als Ihre zugrunde liegende Verbindung.' },
    ],
    bullets: ['WireGuard zuerst für geringen Overhead', 'Smart Connect, wenn Netze VPN filtern', 'Speed Test als Realitätscheck für die Latenz', 'Dasselbe Free- und Premium-Modell wie im Alltag'],
    cta: CTA,
    faq: [
      { q: 'Senkt FollowNet den Ping?', a: 'Manchmal hilft ein besserer Ausgang; oft erzeugt das VPN Overhead. Messen Sie mit dem Speed Test, statt es anzunehmen.' },
      { q: 'Ist AmneziaWG gut für Spiele?', a: 'Nutzen Sie es, wenn normales WireGuard blockiert ist. Die Tarnung kann etwas Leistung gegen Erreichbarkeit tauschen.' },
      { q: 'Kann ich mit Free spielen?', a: 'Ja, im Rahmen des Wochenlimits. Für ganztägiges kompetitives Spielen braucht man meist Premium.' },
    ],
  },
};
