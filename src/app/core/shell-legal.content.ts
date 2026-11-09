import { AppLang } from './i18n.service';
import type { ProductPage } from './product-pages.content';
import type { SeoCopy } from './seo-copy';

/** Remora privacy policy and terms of use (linked from the app's paywall and Settings). */

const UPDATED = {
  en: 'Last updated: 9 November 2026',
  ru: 'Обновлено: 9 ноября 2026',
  uk: 'Оновлено: 9 листопада 2026',
  de: 'Stand: 9. November 2026',
  es: 'Última actualización: 9 de noviembre de 2026',
  fr: 'Dernière mise à jour : 9 novembre 2026',
  pt: 'Última atualização: 9 de novembro de 2026',
} satisfies Record<AppLang, string>;

const SUBSCRIPTIONS = 'https://apps.apple.com/account/subscriptions';
const APPLE_EULA = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

// MARK: - Privacy

const PRIVACY: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'Remora',
    h1: 'Privacy policy',
    lead: `Remora is an SSH, SFTP, Mosh, Telnet and serial terminal for iPhone, iPad and Mac. It is built so that we never receive your data. ${UPDATED.en}.`,
    blocks: [
      { title: 'What we collect', body: 'Nothing. The app has no account, no sign-in, no analytics, no advertising and no tracking SDKs, and we operate no servers that it talks to. We do not collect, store, sell or share personal data.' },
      { title: 'Data stored by the app', body: 'Hosts, folders, snippets, tunnel rules and key names are stored on your device. If iCloud is available, they sync through your own private iCloud database (Apple CloudKit), which we cannot access. This includes each host’s startup command and environment variables, so do not put secrets there. Command history and activity logs stay on the device and are never synced.' },
      { title: 'Session logs', body: 'If you turn on Settings → Session → “Save session logs”, the text output of your terminal sessions is saved as plain-text files on this device. It is off by default, the files are never synced or sent anywhere, and you can view, share or delete them in Settings → Session Logs. Logs can contain anything shown on screen, so share them with care.' },
      { title: 'Passwords and keys', body: 'Passwords, private keys and passphrases are stored in the Apple Keychain on your device. They are synced only if you turn on Settings → Sync → “Passwords & SSH keys”, and then only through iCloud Keychain, which Apple encrypts end to end. Secure Enclave keys never leave the device that created them.' },
      { title: 'Network connections', body: 'The app connects only to the servers and devices you configure — over SSH, Mosh, SFTP, Telnet, port forwarding, or a serial port on Mac. That traffic goes directly between your device and them, never through us. Telnet is unencrypted by design and the app warns you when you choose it. Host-key fingerprints are stored to protect you from impersonated servers.' },
      { title: 'Local terminal on Mac', body: 'If you choose to install the local terminal helper, a small script is placed in ~/Library/Application Scripts. It starts your login shell on your Mac with your own permissions. It sends nothing anywhere, and you can delete it at any time.' },
      { title: 'Purchases', body: `Pro is sold through the App Store. Payments, subscriptions, trials and refunds are handled by Apple; we never see your payment details. The app checks your purchase status with Apple’s StoreKit on the device. Manage or cancel your subscription in your Apple ID settings: ${SUBSCRIPTIONS}` },
      { title: 'Children', body: 'Remora is not directed to children and does not knowingly collect data from anyone, including children under 13.' },
      { title: 'Changes and contact', body: 'If this policy changes, we will update this page and the date above. Questions about privacy or the app: support@follow-net.com.' },
    ],
    bullets: [],
  },
  ru: {
    kicker: 'Remora',
    h1: 'Политика конфиденциальности',
    lead: `Remora — терминал SSH, SFTP, Mosh, Telnet и serial для iPhone, iPad и Mac. Он устроен так, что ваши данные к нам не попадают. ${UPDATED.ru}.`,
    blocks: [
      { title: 'Что мы собираем', body: 'Ничего. В приложении нет аккаунта, входа, аналитики, рекламы и SDK для отслеживания, и у нас нет серверов, с которыми оно общается. Мы не собираем, не храним, не продаём и не передаём персональные данные.' },
      { title: 'Данные в приложении', body: 'Хосты, папки, сниппеты, правила туннелей и названия ключей хранятся на вашем устройстве. Если доступен iCloud, они синхронизируются через вашу личную базу iCloud (Apple CloudKit), к которой у нас нет доступа. Вместе с хостом синхронизируются его команда при подключении и переменные окружения, поэтому не храните в них секреты. История команд и журнал событий остаются на устройстве и не синхронизируются.' },
      { title: 'Логи сессий', body: 'Если включить Settings → Session → «Save session logs», текстовый вывод терминала сохраняется в файлы на этом устройстве. По умолчанию это выключено; файлы никогда не синхронизируются и никуда не отправляются, а посмотреть, отправить или удалить их можно в Settings → Session Logs. В логи попадает всё, что было на экране, поэтому делитесь ими осторожно.' },
      { title: 'Пароли и ключи', body: 'Пароли, закрытые ключи и парольные фразы хранятся в связке ключей Apple на устройстве. Они синхронизируются, только если вы включите Settings → Sync → «Passwords & SSH keys», и только через iCloud Keychain со сквозным шифрованием Apple. Ключи Secure Enclave никогда не покидают устройство, на котором созданы.' },
      { title: 'Сетевые подключения', body: 'Приложение подключается только к серверам и устройствам, которые вы настроили, — по SSH, Mosh, SFTP, Telnet, через проброс портов или serial-порт на Mac. Трафик идёт напрямую между вашим устройством и ними, не через нас. Telnet по своей природе не шифруется, и приложение предупреждает об этом при выборе. Отпечатки ключей серверов сохраняются, чтобы защитить вас от подмены сервера.' },
      { title: 'Локальный терминал на Mac', body: 'Если вы решите установить помощник локального терминала, в ~/Library/Application Scripts будет помещён небольшой скрипт. Он запускает вашу оболочку на Mac с вашими же правами, ничего никуда не отправляет, и его можно удалить в любой момент.' },
      { title: 'Покупки', body: `Pro продаётся через App Store. Оплату, подписки, пробные периоды и возвраты обрабатывает Apple; мы не видим ваших платёжных данных. Приложение проверяет статус покупки через StoreKit на устройстве. Управлять подпиской или отменить её можно в настройках Apple ID: ${SUBSCRIPTIONS}` },
      { title: 'Дети', body: 'Приложение Remora не предназначено для детей и намеренно не собирает данные ни о ком, включая детей младше 13 лет.' },
      { title: 'Изменения и контакты', body: 'Если политика изменится, мы обновим эту страницу и дату выше. Вопросы о конфиденциальности или приложении: support@follow-net.com.' },
    ],
    bullets: [],
  },
  uk: {
    kicker: 'Remora',
    h1: 'Політика конфіденційності',
    lead: `Remora — термінал SSH, SFTP, Mosh, Telnet і serial для iPhone, iPad і Mac. Його влаштовано так, що ваші дані до нас не потрапляють. ${UPDATED.uk}.`,
    blocks: [
      { title: 'Що ми збираємо', body: 'Нічого. У програмі немає акаунта, входу, аналітики, реклами та SDK для стеження, і в нас немає серверів, з якими вона спілкується. Ми не збираємо, не зберігаємо, не продаємо й не передаємо персональні дані.' },
      { title: 'Дані в програмі', body: 'Хости, папки, сніпети, правила тунелів і назви ключів зберігаються на вашому пристрої. Якщо доступний iCloud, вони синхронізуються через вашу особисту базу iCloud (Apple CloudKit), до якої в нас немає доступу. Разом із хостом синхронізуються його команда під час підключення та змінні середовища, тому не зберігайте в них секрети. Історія команд і журнал подій залишаються на пристрої й не синхронізуються.' },
      { title: 'Логи сесій', body: 'Якщо ввімкнути Settings → Session → «Save session logs», текстовий вивід термінала зберігається у файли на цьому пристрої. За замовчуванням це вимкнено; файли ніколи не синхронізуються й нікуди не надсилаються, а переглянути, надіслати чи видалити їх можна в Settings → Session Logs. У логи потрапляє все, що було на екрані, тож діліться ними обережно.' },
      { title: 'Паролі та ключі', body: 'Паролі, закриті ключі й парольні фрази зберігаються у зв’язці ключів Apple на пристрої. Вони синхронізуються, лише якщо ви ввімкнете Settings → Sync → «Passwords & SSH keys», і лише через iCloud Keychain із наскрізним шифруванням Apple. Ключі Secure Enclave ніколи не залишають пристрій, на якому створені.' },
      { title: 'Мережеві підключення', body: 'Програма підключається лише до серверів і пристроїв, які ви налаштували, — через SSH, Mosh, SFTP, Telnet, перенаправлення портів або serial-порт на Mac. Трафік іде напряму між вашим пристроєм і ними, не через нас. Telnet за своєю природою не шифрується, і програма попереджає про це під час вибору. Відбитки ключів серверів зберігаються, щоб захистити вас від підміни сервера.' },
      { title: 'Локальний термінал на Mac', body: 'Якщо ви вирішите встановити помічник локального термінала, у ~/Library/Application Scripts буде розміщено невеликий скрипт. Він запускає вашу оболонку на Mac із вашими ж правами, нічого нікуди не надсилає, і його можна видалити будь-коли.' },
      { title: 'Покупки', body: `Pro продається через App Store. Оплату, підписки, пробні періоди й повернення обробляє Apple; ми не бачимо ваших платіжних даних. Програма перевіряє статус покупки через StoreKit на пристрої. Керувати підпискою або скасувати її можна в налаштуваннях Apple ID: ${SUBSCRIPTIONS}` },
      { title: 'Діти', body: 'Програма Remora не призначена для дітей і навмисно не збирає даних ні про кого, зокрема про дітей до 13 років.' },
      { title: 'Зміни та контакти', body: 'Якщо політика зміниться, ми оновимо цю сторінку й дату вище. Запитання щодо конфіденційності чи програми: support@follow-net.com.' },
    ],
    bullets: [],
  },
  de: {
    kicker: 'Remora',
    h1: 'Datenschutzerklärung',
    lead: `Remora ist ein SSH-, SFTP-, Mosh-, Telnet- und Seriell-Terminal für iPhone, iPad und Mac. Es ist so gebaut, dass wir deine Daten nie erhalten. ${UPDATED.de}.`,
    blocks: [
      { title: 'Was wir erheben', body: 'Nichts. Die App hat kein Konto, keine Anmeldung, keine Analyse, keine Werbung und keine Tracking-SDKs, und wir betreiben keine Server, mit denen sie spricht. Wir erheben, speichern, verkaufen oder teilen keine personenbezogenen Daten.' },
      { title: 'Von der App gespeicherte Daten', body: 'Hosts, Ordner, Snippets, Tunnelregeln und Schlüsselnamen werden auf deinem Gerät gespeichert. Ist iCloud verfügbar, synchronisieren sie über deine eigene private iCloud-Datenbank (Apple CloudKit), auf die wir keinen Zugriff haben. Dazu gehören auch Startbefehl und Umgebungsvariablen eines Hosts – lege dort also keine Geheimnisse ab. Befehlsverlauf und Aktivitätsprotokolle bleiben auf dem Gerät und werden nie synchronisiert.' },
      { title: 'Sitzungsprotokolle', body: 'Wenn du Settings → Session → „Save session logs“ aktivierst, wird die Textausgabe deiner Terminalsitzungen als Textdatei auf diesem Gerät gespeichert. Standardmäßig ist das aus; die Dateien werden nie synchronisiert oder gesendet, und du kannst sie unter Settings → Session Logs ansehen, teilen oder löschen. Protokolle enthalten alles, was auf dem Bildschirm stand – teile sie mit Bedacht.' },
      { title: 'Passwörter und Schlüssel', body: 'Passwörter, private Schlüssel und Passphrasen liegen im Apple-Schlüsselbund auf deinem Gerät. Sie werden nur synchronisiert, wenn du Settings → Sync → „Passwords & SSH keys“ aktivierst – und dann nur über den von Apple Ende-zu-Ende verschlüsselten iCloud-Schlüsselbund. Secure-Enclave-Schlüssel verlassen nie das Gerät, auf dem sie erstellt wurden.' },
      { title: 'Netzwerkverbindungen', body: 'Die App verbindet sich nur mit den Servern und Geräten, die du einrichtest – per SSH, Mosh, SFTP, Telnet, Portweiterleitung oder über eine serielle Schnittstelle am Mac. Dieser Verkehr läuft direkt zwischen deinem Gerät und ihnen, nie über uns. Telnet ist systembedingt unverschlüsselt, und die App warnt dich bei der Auswahl. Host-Key-Fingerabdrücke werden gespeichert, um dich vor gefälschten Servern zu schützen.' },
      { title: 'Lokales Terminal auf dem Mac', body: 'Wenn du das Hilfsprogramm für das lokale Terminal installierst, wird ein kleines Skript in ~/Library/Application Scripts abgelegt. Es startet deine Login-Shell auf deinem Mac mit deinen eigenen Rechten, sendet nichts irgendwohin und kann jederzeit gelöscht werden.' },
      { title: 'Käufe', body: `Pro wird über den App Store verkauft. Zahlungen, Abos, Testphasen und Erstattungen wickelt Apple ab; wir sehen deine Zahlungsdaten nie. Die App prüft deinen Kaufstatus mit StoreKit auf dem Gerät. Dein Abo verwaltest oder kündigst du in den Apple-ID-Einstellungen: ${SUBSCRIPTIONS}` },
      { title: 'Kinder', body: 'Remora richtet sich nicht an Kinder und erhebt wissentlich keine Daten von irgendjemandem, auch nicht von Kindern unter 13 Jahren.' },
      { title: 'Änderungen und Kontakt', body: 'Ändert sich diese Erklärung, aktualisieren wir diese Seite und das Datum oben. Fragen zum Datenschutz oder zur App: support@follow-net.com.' },
    ],
    bullets: [],
  },
  es: {
    kicker: 'Remora',
    h1: 'Política de privacidad',
    lead: `Remora es un terminal SSH, SFTP, Mosh, Telnet y serie para iPhone, iPad y Mac. Está hecho para que nunca recibamos tus datos. ${UPDATED.es}.`,
    blocks: [
      { title: 'Qué recopilamos', body: 'Nada. La app no tiene cuenta, inicio de sesión, analítica, publicidad ni SDK de rastreo, y no operamos servidores con los que se comunique. No recopilamos, almacenamos, vendemos ni compartimos datos personales.' },
      { title: 'Datos que guarda la app', body: 'Los hosts, carpetas, snippets, reglas de túneles y nombres de claves se guardan en tu dispositivo. Si iCloud está disponible, se sincronizan con tu propia base de datos privada de iCloud (Apple CloudKit), a la que no tenemos acceso. Esto incluye el comando de inicio y las variables de entorno de cada host, así que no guardes secretos ahí. El historial de comandos y los registros de actividad se quedan en el dispositivo y nunca se sincronizan.' },
      { title: 'Registros de sesión', body: 'Si activas Settings → Session → «Save session logs», la salida de texto de tus sesiones de terminal se guarda en archivos de texto en este dispositivo. Está desactivado por defecto; los archivos nunca se sincronizan ni se envían, y puedes verlos, compartirlos o borrarlos en Settings → Session Logs. Los registros contienen todo lo que se mostró en pantalla, así que compártelos con cuidado.' },
      { title: 'Contraseñas y claves', body: 'Las contraseñas, claves privadas y frases de contraseña se guardan en el llavero de Apple de tu dispositivo. Solo se sincronizan si activas Settings → Sync → «Passwords & SSH keys», y entonces solo por el Llavero de iCloud, cifrado de extremo a extremo por Apple. Las claves de Secure Enclave nunca salen del dispositivo que las creó.' },
      { title: 'Conexiones de red', body: 'La app se conecta solo a los servidores y dispositivos que configuras, por SSH, Mosh, SFTP, Telnet, reenvío de puertos o un puerto serie en Mac. Ese tráfico va directamente entre tu dispositivo y ellos, nunca a través de nosotros. Telnet no está cifrado por diseño y la app te avisa al elegirlo. Las huellas de las claves de los hosts se guardan para protegerte frente a servidores suplantados.' },
      { title: 'Terminal local en Mac', body: 'Si decides instalar el asistente del terminal local, se coloca un pequeño script en ~/Library/Application Scripts. Inicia tu shell de sesión en tu Mac con tus propios permisos, no envía nada a ninguna parte y puedes borrarlo cuando quieras.' },
      { title: 'Compras', body: `Pro se vende a través del App Store. Los pagos, suscripciones, pruebas y reembolsos los gestiona Apple; nunca vemos tus datos de pago. La app comprueba el estado de tu compra con StoreKit en el dispositivo. Gestiona o cancela tu suscripción en los ajustes de tu Apple ID: ${SUBSCRIPTIONS}` },
      { title: 'Menores', body: 'Remora no está dirigido a menores y no recopila a sabiendas datos de nadie, incluidos menores de 13 años.' },
      { title: 'Cambios y contacto', body: 'Si esta política cambia, actualizaremos esta página y la fecha de arriba. Preguntas sobre privacidad o la app: support@follow-net.com.' },
    ],
    bullets: [],
  },
  fr: {
    kicker: 'Remora',
    h1: 'Politique de confidentialité',
    lead: `Remora est un terminal SSH, SFTP, Mosh, Telnet et série pour iPhone, iPad et Mac. Il est conçu pour que vos données ne nous parviennent jamais. ${UPDATED.fr}.`,
    blocks: [
      { title: 'Ce que nous collectons', body: 'Rien. L’app n’a ni compte, ni connexion, ni analytique, ni publicité, ni SDK de pistage, et nous n’exploitons aucun serveur avec lequel elle communique. Nous ne collectons, ne stockons, ne vendons ni ne partageons aucune donnée personnelle.' },
      { title: 'Données enregistrées par l’app', body: 'Les hôtes, dossiers, snippets, règles de tunnel et noms de clés sont enregistrés sur votre appareil. Si iCloud est disponible, ils se synchronisent via votre propre base iCloud privée (Apple CloudKit), à laquelle nous n’avons pas accès. Cela inclut la commande de démarrage et les variables d’environnement de chaque hôte : n’y mettez donc pas de secrets. L’historique des commandes et les journaux d’activité restent sur l’appareil et ne sont jamais synchronisés.' },
      { title: 'Journaux de session', body: 'Si vous activez Settings → Session → « Save session logs », la sortie texte de vos sessions de terminal est enregistrée dans des fichiers texte sur cet appareil. C’est désactivé par défaut ; les fichiers ne sont jamais synchronisés ni envoyés, et vous pouvez les consulter, les partager ou les supprimer dans Settings → Session Logs. Les journaux contiennent tout ce qui s’est affiché à l’écran : partagez-les avec prudence.' },
      { title: 'Mots de passe et clés', body: 'Les mots de passe, clés privées et phrases secrètes sont conservés dans le trousseau Apple de votre appareil. Ils ne sont synchronisés que si vous activez Settings → Sync → « Passwords & SSH keys », et uniquement via le trousseau iCloud, chiffré de bout en bout par Apple. Les clés Secure Enclave ne quittent jamais l’appareil qui les a créées.' },
      { title: 'Connexions réseau', body: 'L’app se connecte uniquement aux serveurs et appareils que vous configurez — en SSH, Mosh, SFTP, Telnet, par redirection de ports ou via un port série sur Mac. Ce trafic circule directement entre votre appareil et eux, jamais par nous. Telnet n’est pas chiffré par nature et l’app vous avertit quand vous le choisissez. Les empreintes des clés d’hôte sont conservées pour vous protéger des serveurs usurpés.' },
      { title: 'Terminal local sur Mac', body: 'Si vous installez l’assistant du terminal local, un petit script est placé dans ~/Library/Application Scripts. Il lance votre shell de connexion sur votre Mac avec vos propres autorisations, n’envoie rien nulle part et peut être supprimé à tout moment.' },
      { title: 'Achats', body: `Pro est vendu via l’App Store. Paiements, abonnements, essais et remboursements sont gérés par Apple ; nous ne voyons jamais vos données de paiement. L’app vérifie l’état de votre achat avec StoreKit sur l’appareil. Gérez ou résiliez votre abonnement dans les réglages de votre identifiant Apple : ${SUBSCRIPTIONS}` },
      { title: 'Enfants', body: 'Remora ne s’adresse pas aux enfants et ne collecte sciemment de données sur personne, y compris les enfants de moins de 13 ans.' },
      { title: 'Modifications et contact', body: 'Si cette politique change, nous mettrons à jour cette page et la date ci-dessus. Questions sur la confidentialité ou l’app : support@follow-net.com.' },
    ],
    bullets: [],
  },
  pt: {
    kicker: 'Remora',
    h1: 'Política de privacidade',
    lead: `O Remora é um terminal SSH, SFTP, Mosh, Telnet e serial para iPhone, iPad e Mac. Ele foi feito para que nunca recebamos seus dados. ${UPDATED.pt}.`,
    blocks: [
      { title: 'O que coletamos', body: 'Nada. O app não tem conta, login, análise, publicidade nem SDKs de rastreamento, e não operamos servidores com os quais ele se comunique. Não coletamos, armazenamos, vendemos nem compartilhamos dados pessoais.' },
      { title: 'Dados guardados pelo app', body: 'Hosts, pastas, snippets, regras de túnel e nomes de chaves ficam no seu dispositivo. Se o iCloud estiver disponível, eles sincronizam pelo seu próprio banco de dados privado do iCloud (Apple CloudKit), ao qual não temos acesso. Isso inclui o comando de inicialização e as variáveis de ambiente de cada host, então não coloque segredos neles. O histórico de comandos e os registros de atividade ficam no dispositivo e nunca são sincronizados.' },
      { title: 'Logs de sessão', body: 'Se você ativar Settings → Session → “Save session logs”, a saída de texto das suas sessões de terminal é salva em arquivos de texto neste dispositivo. Vem desativado; os arquivos nunca são sincronizados nem enviados, e você pode vê-los, compartilhá-los ou apagá-los em Settings → Session Logs. Os logs contêm tudo o que apareceu na tela, então compartilhe com cuidado.' },
      { title: 'Senhas e chaves', body: 'Senhas, chaves privadas e frases-senha ficam nas Chaves da Apple no seu dispositivo. Elas só sincronizam se você ativar Settings → Sync → “Passwords & SSH keys”, e apenas pelas Chaves do iCloud, com criptografia de ponta a ponta da Apple. As chaves do Secure Enclave nunca saem do dispositivo que as criou.' },
      { title: 'Conexões de rede', body: 'O app se conecta apenas aos servidores e dispositivos que você configura — por SSH, Mosh, SFTP, Telnet, redirecionamento de portas ou porta serial no Mac. Esse tráfego vai direto entre o seu dispositivo e eles, nunca por nós. O Telnet não é criptografado por natureza e o app avisa quando você o escolhe. As impressões digitais das chaves dos hosts são guardadas para protegê-lo de servidores falsificados.' },
      { title: 'Terminal local no Mac', body: 'Se você instalar o auxiliar do terminal local, um pequeno script é colocado em ~/Library/Application Scripts. Ele inicia o seu shell de login no Mac com as suas próprias permissões, não envia nada a lugar nenhum e pode ser apagado a qualquer momento.' },
      { title: 'Compras', body: `O Pro é vendido pela App Store. Pagamentos, assinaturas, testes e reembolsos são feitos pela Apple; nunca vemos seus dados de pagamento. O app verifica o status da compra com o StoreKit no dispositivo. Gerencie ou cancele sua assinatura nos ajustes do seu Apple ID: ${SUBSCRIPTIONS}` },
      { title: 'Crianças', body: 'O Remora não é direcionado a crianças e não coleta intencionalmente dados de ninguém, inclusive de menores de 13 anos.' },
      { title: 'Alterações e contato', body: 'Se esta política mudar, atualizaremos esta página e a data acima. Dúvidas sobre privacidade ou o app: support@follow-net.com.' },
    ],
    bullets: [],
  },
};

// MARK: - Terms of use

const TERMS: Record<AppLang, ProductPage> = {
  en: {
    kicker: 'Remora',
    h1: 'Terms of use',
    lead: `These terms cover your use of Remora on iPhone, iPad and Mac. ${UPDATED.en}.`,
    blocks: [
      { title: 'Agreement', body: `By downloading or using Remora you agree to these terms. The app is also licensed to you under Apple’s Standard End User License Agreement (${APPLE_EULA}); these terms add to it and, where they differ on the license itself, Apple’s agreement prevails.` },
      { title: 'Free and Pro', body: 'SSH, SFTP, Telnet, the local terminal and up to five saved hosts are free. Remora Pro unlocks additional features and is offered as an auto-renewable monthly or yearly subscription, or as a one-time lifetime purchase. Features included in each plan are shown in the app before you buy.' },
      { title: 'Subscriptions and trials', body: `Payment is charged to your Apple ID at confirmation of purchase. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period; renewal is charged within the 24 hours before it. A free trial, where offered, converts to a paid subscription at its end unless cancelled; any unused trial time is forfeited when you buy a subscription. Manage or cancel in your Apple ID settings: ${SUBSCRIPTIONS}. Refunds are handled by Apple.` },
      { title: 'Your servers, your responsibility', body: 'Use Remora only with servers, devices and accounts you own or are authorized to access. You are responsible for the commands you run, the files you transfer and the credentials you store. We have no access to your servers, sessions or data, and cannot recover lost passwords or keys — keep your own backups.' },
      { title: 'Security notes', body: 'Telnet sends everything, including passwords, unencrypted; use it only on networks you trust. Always verify host-key fingerprints when the app asks. The optional local terminal helper on Mac runs your shell outside the App Sandbox with your own user permissions; you can remove it at any time by deleting it from ~/Library/Application Scripts.' },
      { title: 'Acceptable use', body: 'Do not use the app to access systems without permission, to break the law, or to interfere with other people’s networks or services.' },
      { title: 'Third-party services and software', body: 'iCloud, iCloud Keychain and App Store purchases are provided by Apple under Apple’s terms. The app includes open-source components; their licenses are listed in Settings → Account → Acknowledgements.' },
      { title: 'Disclaimer and liability', body: 'The app is provided “as is” and “as available”, without warranties of any kind, to the fullest extent permitted by law. To the extent permitted by law, we are not liable for indirect or consequential damages, or for loss of data, access or business, and our total liability is limited to the amount you paid for the app in the 12 months before the claim. Nothing in these terms limits rights you have under consumer protection laws that cannot be waived.' },
      { title: 'Changes and contact', body: 'We may update these terms; the current version is always on this page with its date. Continuing to use the app after a change means you accept the updated terms. Questions: support@follow-net.com.' },
    ],
    bullets: [],
  },
  ru: {
    kicker: 'Remora',
    h1: 'Условия использования',
    lead: `Эти условия регулируют использование Remora на iPhone, iPad и Mac. ${UPDATED.ru}.`,
    blocks: [
      { title: 'Соглашение', body: `Загружая или используя Remora, вы соглашаетесь с этими условиями. Приложение также лицензируется вам по Стандартному лицензионному соглашению Apple с конечным пользователем (${APPLE_EULA}); эти условия дополняют его, а в вопросах самой лицензии при расхождении действует соглашение Apple.` },
      { title: 'Free и Pro', body: 'SSH, SFTP, Telnet, локальный терминал и до пяти сохранённых хостов бесплатны. Remora Pro открывает дополнительные функции и предлагается как автоматически продлеваемая месячная или годовая подписка либо как разовая покупка навсегда. Состав каждого плана показан в приложении до покупки.' },
      { title: 'Подписки и пробный период', body: `Оплата списывается с вашего Apple ID при подтверждении покупки. Подписка продлевается автоматически, если не отменить её минимум за 24 часа до конца текущего периода; продление оплачивается в течение 24 часов до него. Бесплатный пробный период, если он предлагается, по окончании переходит в платную подписку, если её не отменить; неиспользованные дни пробного периода сгорают при покупке подписки. Управлять подпиской или отменить её можно в настройках Apple ID: ${SUBSCRIPTIONS}. Возвраты оформляет Apple.` },
      { title: 'Ваши серверы — ваша ответственность', body: 'Используйте Remora только с серверами, устройствами и учётными записями, которые принадлежат вам или к которым у вас есть разрешённый доступ. Вы отвечаете за выполняемые команды, передаваемые файлы и сохранённые учётные данные. У нас нет доступа к вашим серверам, сессиям и данным, и мы не можем восстановить утерянные пароли или ключи — храните собственные резервные копии.' },
      { title: 'О безопасности', body: 'Telnet передаёт всё, включая пароли, без шифрования; используйте его только в доверенных сетях. Всегда сверяйте отпечаток ключа сервера, когда приложение об этом спрашивает. Необязательный помощник локального терминала на Mac запускает вашу оболочку вне песочницы App Sandbox с правами вашего пользователя; его можно удалить в любой момент из ~/Library/Application Scripts.' },
      { title: 'Допустимое использование', body: 'Не используйте приложение для доступа к системам без разрешения, для нарушения закона или вмешательства в чужие сети и сервисы.' },
      { title: 'Сторонние сервисы и ПО', body: 'iCloud, iCloud Keychain и покупки в App Store предоставляются Apple на условиях Apple. Приложение использует компоненты с открытым исходным кодом; их лицензии перечислены в «Настройки → Аккаунт → Acknowledgements».' },
      { title: 'Отказ от гарантий и ответственность', body: 'Приложение предоставляется «как есть» и «по мере доступности», без каких-либо гарантий, в максимальной степени, допустимой законом. В пределах, допустимых законом, мы не несём ответственности за косвенный или последующий ущерб, потерю данных, доступа или бизнеса, а наша совокупная ответственность ограничена суммой, уплаченной вами за приложение за 12 месяцев до претензии. Ничто в этих условиях не ограничивает права, которые даёт вам законодательство о защите прав потребителей и от которых нельзя отказаться.' },
      { title: 'Изменения и контакты', body: 'Мы можем обновлять эти условия; действующая версия всегда опубликована на этой странице с датой. Продолжая пользоваться приложением после изменений, вы принимаете обновлённые условия. Вопросы: support@follow-net.com.' },
    ],
    bullets: [],
  },
  uk: {
    kicker: 'Remora',
    h1: 'Умови використання',
    lead: `Ці умови регулюють використання Remora на iPhone, iPad і Mac. ${UPDATED.uk}.`,
    blocks: [
      { title: 'Угода', body: `Завантажуючи або використовуючи Remora, ви погоджуєтеся з цими умовами. Програма також ліцензується вам за Стандартною ліцензійною угодою Apple з кінцевим користувачем (${APPLE_EULA}); ці умови доповнюють її, а щодо самої ліцензії в разі розбіжностей діє угода Apple.` },
      { title: 'Free і Pro', body: 'SSH, SFTP, Telnet, локальний термінал і до п’яти збережених хостів безкоштовні. Remora Pro відкриває додаткові функції й пропонується як автоматично поновлювана місячна чи річна підписка або як разова покупка назавжди. Склад кожного плану показано в програмі до покупки.' },
      { title: 'Підписки та пробний період', body: `Оплата списується з вашого Apple ID під час підтвердження покупки. Підписка поновлюється автоматично, якщо не скасувати її щонайменше за 24 години до кінця поточного періоду; поновлення оплачується протягом 24 годин до нього. Безкоштовний пробний період, якщо він пропонується, після завершення переходить у платну підписку, якщо її не скасувати; невикористані дні пробного періоду згорають під час купівлі підписки. Керувати підпискою або скасувати її можна в налаштуваннях Apple ID: ${SUBSCRIPTIONS}. Повернення оформлює Apple.` },
      { title: 'Ваші сервери — ваша відповідальність', body: 'Використовуйте Remora лише із серверами, пристроями та обліковими записами, які належать вам або до яких у вас є дозволений доступ. Ви відповідаєте за виконувані команди, передавані файли й збережені облікові дані. Ми не маємо доступу до ваших серверів, сесій і даних і не можемо відновити втрачені паролі чи ключі — зберігайте власні резервні копії.' },
      { title: 'Про безпеку', body: 'Telnet передає все, зокрема паролі, без шифрування; використовуйте його лише в довірених мережах. Завжди звіряйте відбиток ключа сервера, коли програма про це питає. Необов’язковий помічник локального термінала на Mac запускає вашу оболонку поза пісочницею App Sandbox із правами вашого користувача; його можна будь-коли видалити з ~/Library/Application Scripts.' },
      { title: 'Допустиме використання', body: 'Не використовуйте програму для доступу до систем без дозволу, для порушення закону чи втручання в чужі мережі й сервіси.' },
      { title: 'Сторонні сервіси та ПЗ', body: 'iCloud, iCloud Keychain і покупки в App Store надає Apple на умовах Apple. Програма використовує компоненти з відкритим кодом; їхні ліцензії наведено в «Налаштування → Акаунт → Acknowledgements».' },
      { title: 'Відмова від гарантій і відповідальність', body: 'Програма надається «як є» й «за наявності», без будь-яких гарантій, наскільки це дозволяє закон. У межах, дозволених законом, ми не відповідаємо за непрямі чи наслідкові збитки, втрату даних, доступу чи бізнесу, а наша сукупна відповідальність обмежена сумою, яку ви сплатили за програму за 12 місяців до претензії. Ніщо в цих умовах не обмежує прав, які надає вам законодавство про захист прав споживачів і від яких не можна відмовитися.' },
      { title: 'Зміни та контакти', body: 'Ми можемо оновлювати ці умови; чинна версія завжди опублікована на цій сторінці з датою. Продовжуючи користуватися програмою після змін, ви приймаєте оновлені умови. Запитання: support@follow-net.com.' },
    ],
    bullets: [],
  },
  de: {
    kicker: 'Remora',
    h1: 'Nutzungsbedingungen',
    lead: `Diese Bedingungen regeln die Nutzung von Remora auf iPhone, iPad und Mac. ${UPDATED.de}.`,
    blocks: [
      { title: 'Vereinbarung', body: `Mit dem Download oder der Nutzung von Remora stimmst du diesen Bedingungen zu. Die App wird dir außerdem unter Apples Standard-Endbenutzer-Lizenzvertrag (${APPLE_EULA}) lizenziert; diese Bedingungen ergänzen ihn, und bei Abweichungen zur Lizenz selbst hat Apples Vertrag Vorrang.` },
      { title: 'Free und Pro', body: 'SSH, SFTP, Telnet, das lokale Terminal und bis zu fünf gespeicherte Hosts sind kostenlos. Remora Pro schaltet zusätzliche Funktionen frei und wird als automatisch verlängertes Monats- oder Jahresabo oder als einmaliger Lifetime-Kauf angeboten. Was jeder Plan enthält, zeigt die App vor dem Kauf.' },
      { title: 'Abos und Testphasen', body: `Die Zahlung wird bei Bestätigung des Kaufs deiner Apple-ID belastet. Abos verlängern sich automatisch, sofern sie nicht mindestens 24 Stunden vor Ende des aktuellen Zeitraums gekündigt werden; die Verlängerung wird innerhalb der 24 Stunden davor berechnet. Eine angebotene Gratis-Testphase geht an ihrem Ende in ein bezahltes Abo über, sofern sie nicht gekündigt wird; ungenutzte Testzeit verfällt beim Kauf eines Abos. Verwalten oder kündigen kannst du in den Apple-ID-Einstellungen: ${SUBSCRIPTIONS}. Erstattungen wickelt Apple ab.` },
      { title: 'Deine Server, deine Verantwortung', body: 'Nutze Remora nur mit Servern, Geräten und Konten, die dir gehören oder für die du eine Zugriffsberechtigung hast. Du bist für ausgeführte Befehle, übertragene Dateien und gespeicherte Zugangsdaten verantwortlich. Wir haben keinen Zugriff auf deine Server, Sitzungen oder Daten und können verlorene Passwörter oder Schlüssel nicht wiederherstellen – erstelle eigene Sicherungen.' },
      { title: 'Sicherheitshinweise', body: 'Telnet überträgt alles, auch Passwörter, unverschlüsselt; nutze es nur in vertrauenswürdigen Netzen. Prüfe Host-Key-Fingerabdrücke immer, wenn die App danach fragt. Das optionale Hilfsprogramm für das lokale Terminal auf dem Mac startet deine Shell außerhalb der App-Sandbox mit deinen eigenen Benutzerrechten; du kannst es jederzeit aus ~/Library/Application Scripts löschen.' },
      { title: 'Zulässige Nutzung', body: 'Nutze die App nicht, um ohne Erlaubnis auf Systeme zuzugreifen, gegen Gesetze zu verstoßen oder fremde Netze und Dienste zu stören.' },
      { title: 'Dienste und Software Dritter', body: 'iCloud, der iCloud-Schlüsselbund und App-Store-Käufe werden von Apple zu Apples Bedingungen bereitgestellt. Die App enthält Open-Source-Komponenten; ihre Lizenzen findest du unter Einstellungen → Account → Acknowledgements.' },
      { title: 'Gewährleistung und Haftung', body: 'Die App wird im gesetzlich zulässigen Umfang „wie besehen“ und „wie verfügbar“ ohne Gewährleistung jeglicher Art bereitgestellt. Soweit gesetzlich zulässig, haften wir nicht für mittelbare oder Folgeschäden oder für Daten-, Zugangs- oder Geschäftsverluste, und unsere Gesamthaftung ist auf den Betrag begrenzt, den du in den 12 Monaten vor dem Anspruch für die App gezahlt hast. Zwingende Verbraucherschutzrechte bleiben unberührt.' },
      { title: 'Änderungen und Kontakt', body: 'Wir können diese Bedingungen aktualisieren; die aktuelle Fassung steht immer mit Datum auf dieser Seite. Wenn du die App nach einer Änderung weiter nutzt, akzeptierst du die neuen Bedingungen. Fragen: support@follow-net.com.' },
    ],
    bullets: [],
  },
  es: {
    kicker: 'Remora',
    h1: 'Términos de uso',
    lead: `Estos términos regulan el uso de Remora en iPhone, iPad y Mac. ${UPDATED.es}.`,
    blocks: [
      { title: 'Acuerdo', body: `Al descargar o usar Remora aceptas estos términos. La app también se te licencia bajo el Contrato de licencia de usuario final estándar de Apple (${APPLE_EULA}); estos términos lo complementan y, en lo relativo a la licencia en sí, prevalece el contrato de Apple si difieren.` },
      { title: 'Free y Pro', body: 'SSH, SFTP, Telnet, el terminal local y hasta cinco hosts guardados son gratis. Remora Pro desbloquea funciones adicionales y se ofrece como suscripción mensual o anual de renovación automática, o como compra única de por vida. Lo que incluye cada plan se muestra en la app antes de comprar.' },
      { title: 'Suscripciones y pruebas', body: `El pago se carga a tu Apple ID al confirmar la compra. Las suscripciones se renuevan automáticamente salvo que se cancelen al menos 24 horas antes del final del periodo actual; la renovación se cobra en las 24 horas previas. Una prueba gratuita, si se ofrece, pasa a suscripción de pago al terminar salvo que la canceles; el tiempo de prueba no usado se pierde al comprar una suscripción. Gestiona o cancela en los ajustes de tu Apple ID: ${SUBSCRIPTIONS}. Los reembolsos los gestiona Apple.` },
      { title: 'Tus servidores, tu responsabilidad', body: 'Usa Remora solo con servidores, dispositivos y cuentas que te pertenezcan o a los que tengas permiso de acceso. Eres responsable de los comandos que ejecutas, los archivos que transfieres y las credenciales que guardas. No tenemos acceso a tus servidores, sesiones ni datos, y no podemos recuperar contraseñas o claves perdidas: guarda tus propias copias de seguridad.' },
      { title: 'Notas de seguridad', body: 'Telnet envía todo, incluidas las contraseñas, sin cifrar; úsalo solo en redes de confianza. Verifica siempre la huella de la clave del host cuando la app lo pida. El asistente opcional del terminal local en Mac ejecuta tu shell fuera del App Sandbox con los permisos de tu usuario; puedes quitarlo en cualquier momento borrándolo de ~/Library/Application Scripts.' },
      { title: 'Uso aceptable', body: 'No uses la app para acceder a sistemas sin permiso, infringir la ley o interferir en redes o servicios ajenos.' },
      { title: 'Servicios y software de terceros', body: 'iCloud, el Llavero de iCloud y las compras del App Store los proporciona Apple bajo sus propios términos. La app incluye componentes de código abierto; sus licencias aparecen en Ajustes → Cuenta → Acknowledgements.' },
      { title: 'Exención de garantías y responsabilidad', body: 'La app se proporciona «tal cual» y «según disponibilidad», sin garantías de ningún tipo, en la medida máxima permitida por la ley. En la medida permitida por la ley, no respondemos de daños indirectos o consecuentes, ni de la pérdida de datos, acceso o negocio, y nuestra responsabilidad total se limita a lo que pagaste por la app en los 12 meses anteriores a la reclamación. Nada en estos términos limita los derechos irrenunciables que te otorga la normativa de protección del consumidor.' },
      { title: 'Cambios y contacto', body: 'Podemos actualizar estos términos; la versión vigente siempre está en esta página con su fecha. Si sigues usando la app tras un cambio, aceptas los términos actualizados. Preguntas: support@follow-net.com.' },
    ],
    bullets: [],
  },
  fr: {
    kicker: 'Remora',
    h1: 'Conditions d’utilisation',
    lead: `Ces conditions encadrent l’utilisation de Remora sur iPhone, iPad et Mac. ${UPDATED.fr}.`,
    blocks: [
      { title: 'Accord', body: `En téléchargeant ou en utilisant Remora, vous acceptez ces conditions. L’app vous est également concédée sous le Contrat de licence utilisateur final standard d’Apple (${APPLE_EULA}) ; ces conditions le complètent et, pour ce qui concerne la licence elle-même, le contrat d’Apple prévaut en cas de divergence.` },
      { title: 'Free et Pro', body: 'SSH, SFTP, Telnet, le terminal local et jusqu’à cinq hôtes enregistrés sont gratuits. Remora Pro débloque des fonctions supplémentaires et est proposé en abonnement mensuel ou annuel à renouvellement automatique, ou en achat unique à vie. Le contenu de chaque offre est affiché dans l’app avant l’achat.' },
      { title: 'Abonnements et essais', body: `Le paiement est débité de votre identifiant Apple à la confirmation de l’achat. Les abonnements se renouvellent automatiquement sauf résiliation au moins 24 heures avant la fin de la période en cours ; le renouvellement est facturé dans les 24 heures qui précèdent. Un essai gratuit, s’il est proposé, se transforme en abonnement payant à son terme sauf résiliation ; la durée d’essai non utilisée est perdue à l’achat d’un abonnement. Gérez ou résiliez dans les réglages de votre identifiant Apple : ${SUBSCRIPTIONS}. Les remboursements sont gérés par Apple.` },
      { title: 'Vos serveurs, votre responsabilité', body: 'N’utilisez Remora qu’avec des serveurs, appareils et comptes qui vous appartiennent ou auxquels vous êtes autorisé à accéder. Vous êtes responsable des commandes exécutées, des fichiers transférés et des identifiants enregistrés. Nous n’avons aucun accès à vos serveurs, sessions ou données et ne pouvons pas récupérer des mots de passe ou des clés perdus — faites vos propres sauvegardes.' },
      { title: 'Sécurité', body: 'Telnet transmet tout, y compris les mots de passe, sans chiffrement ; ne l’utilisez que sur des réseaux de confiance. Vérifiez toujours l’empreinte de la clé d’hôte lorsque l’app la demande. L’assistant facultatif du terminal local sur Mac lance votre shell hors de l’App Sandbox avec vos propres autorisations ; vous pouvez le supprimer à tout moment de ~/Library/Application Scripts.' },
      { title: 'Usage acceptable', body: 'N’utilisez pas l’app pour accéder à des systèmes sans autorisation, enfreindre la loi ou perturber les réseaux et services d’autrui.' },
      { title: 'Services et logiciels tiers', body: 'iCloud, le trousseau iCloud et les achats sur l’App Store sont fournis par Apple selon ses propres conditions. L’app contient des composants open source ; leurs licences figurent dans Réglages → Compte → Acknowledgements.' },
      { title: 'Garanties et responsabilité', body: 'L’app est fournie « en l’état » et « selon disponibilité », sans garantie d’aucune sorte, dans toute la mesure permise par la loi. Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects ou consécutifs, ni de la perte de données, d’accès ou d’activité, et notre responsabilité totale est limitée au montant payé pour l’app au cours des 12 mois précédant la réclamation. Rien dans ces conditions ne limite les droits impératifs que vous confère le droit de la consommation.' },
      { title: 'Modifications et contact', body: 'Nous pouvons mettre à jour ces conditions ; la version en vigueur figure toujours sur cette page avec sa date. Continuer à utiliser l’app après une modification vaut acceptation des nouvelles conditions. Questions : support@follow-net.com.' },
    ],
    bullets: [],
  },
  pt: {
    kicker: 'Remora',
    h1: 'Termos de uso',
    lead: `Estes termos regem o uso do Remora no iPhone, iPad e Mac. ${UPDATED.pt}.`,
    blocks: [
      { title: 'Acordo', body: `Ao baixar ou usar o Remora, você concorda com estes termos. O app também é licenciado a você sob o Contrato de Licença de Usuário Final Padrão da Apple (${APPLE_EULA}); estes termos o complementam e, quanto à licença em si, o contrato da Apple prevalece em caso de divergência.` },
      { title: 'Free e Pro', body: 'SSH, SFTP, Telnet, o terminal local e até cinco hosts salvos são grátis. O Remora Pro libera recursos adicionais e é oferecido como assinatura mensal ou anual com renovação automática, ou como compra única vitalícia. O que cada plano inclui é mostrado no app antes da compra.' },
      { title: 'Assinaturas e testes', body: `O pagamento é cobrado no seu Apple ID na confirmação da compra. As assinaturas renovam automaticamente, a menos que sejam canceladas pelo menos 24 horas antes do fim do período atual; a renovação é cobrada nas 24 horas anteriores. Um teste grátis, quando oferecido, vira assinatura paga ao terminar, a menos que seja cancelado; o tempo de teste não usado é perdido ao comprar uma assinatura. Gerencie ou cancele nos ajustes do seu Apple ID: ${SUBSCRIPTIONS}. Os reembolsos são feitos pela Apple.` },
      { title: 'Seus servidores, sua responsabilidade', body: 'Use o Remora apenas com servidores, dispositivos e contas que sejam seus ou aos quais você tenha permissão de acesso. Você é responsável pelos comandos que executa, pelos arquivos que transfere e pelas credenciais que guarda. Não temos acesso aos seus servidores, sessões ou dados e não podemos recuperar senhas ou chaves perdidas — mantenha seus próprios backups.' },
      { title: 'Notas de segurança', body: 'O Telnet envia tudo, inclusive senhas, sem criptografia; use-o apenas em redes confiáveis. Sempre confira a impressão digital da chave do host quando o app pedir. O auxiliar opcional do terminal local no Mac executa o seu shell fora da App Sandbox com as permissões do seu usuário; você pode removê-lo a qualquer momento apagando-o de ~/Library/Application Scripts.' },
      { title: 'Uso aceitável', body: 'Não use o app para acessar sistemas sem permissão, violar a lei ou interferir em redes e serviços de terceiros.' },
      { title: 'Serviços e software de terceiros', body: 'iCloud, as Chaves do iCloud e as compras da App Store são fornecidos pela Apple sob os termos da Apple. O app inclui componentes de código aberto; suas licenças estão em Ajustes → Conta → Acknowledgements.' },
      { title: 'Isenção de garantias e responsabilidade', body: 'O app é fornecido “no estado em que se encontra” e “conforme disponível”, sem garantias de qualquer tipo, na máxima extensão permitida por lei. Na medida permitida por lei, não respondemos por danos indiretos ou consequenciais, nem por perda de dados, acesso ou negócios, e nossa responsabilidade total se limita ao valor que você pagou pelo app nos 12 meses anteriores à reclamação. Nada nestes termos limita direitos irrenunciáveis previstos nas leis de defesa do consumidor.' },
      { title: 'Alterações e contato', body: 'Podemos atualizar estes termos; a versão vigente está sempre nesta página com a data. Continuar usando o app após uma alteração significa aceitar os termos atualizados. Dúvidas: support@follow-net.com.' },
    ],
    bullets: [],
  },
};

export function shellPrivacyPage(lang: AppLang): ProductPage {
  return PRIVACY[lang] ?? PRIVACY.en;
}

export function shellTermsPage(lang: AppLang): ProductPage {
  return TERMS[lang] ?? TERMS.en;
}

export const SHELL_PRIVACY_SEO: Record<AppLang, SeoCopy> = {
  en: { title: 'Remora privacy policy', ogTitle: 'Remora privacy policy', description: 'Remora collects no personal data: no account, no analytics, no tracking. Hosts sync through your own iCloud; passwords and keys stay in the Apple Keychain.' },
  ru: { title: 'Политика конфиденциальности Remora', ogTitle: 'Конфиденциальность Remora', description: 'Remora не собирает персональные данные: без аккаунта, аналитики и слежки. Хосты синхронизируются через ваш iCloud, пароли и ключи остаются в связке ключей Apple.' },
  uk: { title: 'Політика конфіденційності Remora', ogTitle: 'Конфіденційність Remora', description: 'Remora не збирає персональні дані: без акаунта, аналітики й стеження. Хости синхронізуються через ваш iCloud, паролі й ключі залишаються у зв’язці ключів Apple.' },
  de: { title: 'Remora – Datenschutzerklärung', ogTitle: 'Remora – Datenschutz', description: 'Remora erhebt keine personenbezogenen Daten: kein Konto, keine Analyse, kein Tracking. Hosts über dein iCloud, Schlüssel im Apple-Schlüsselbund.' },
  es: { title: 'Política de privacidad de Remora', ogTitle: 'Privacidad de Remora', description: 'Remora no recopila datos personales: sin cuenta, analítica ni rastreo. Hosts por tu iCloud; contraseñas y claves en el llavero de Apple.' },
  fr: { title: 'Politique de confidentialité de Remora', ogTitle: 'Confidentialité de Remora', description: 'Remora ne collecte aucune donnée personnelle : ni compte, ni analytique, ni pistage. Hôtes via votre iCloud, clés dans le trousseau Apple.' },
  pt: { title: 'Política de privacidade do Remora', ogTitle: 'Privacidade do Remora', description: 'O Remora não coleta dados pessoais: sem conta, análise nem rastreamento. Os hosts sincronizam pelo seu iCloud; senhas e chaves ficam nas Chaves da Apple.' },
};

export const SHELL_TERMS_SEO: Record<AppLang, SeoCopy> = {
  en: { title: 'Remora terms of use', ogTitle: 'Remora terms of use', description: 'Terms for Remora: free and Pro plans, subscriptions and trials, your responsibility for the servers you connect to, Telnet and local terminal notes.' },
  ru: { title: 'Условия использования Remora', ogTitle: 'Условия Remora', description: 'Условия Remora: бесплатный план и Pro, подписки и пробный период, ответственность за подключаемые серверы, особенности Telnet и локального терминала.' },
  uk: { title: 'Умови використання Remora', ogTitle: 'Умови Remora', description: 'Умови Remora: Free і Pro, підписки та пробний період, відповідальність за ваші сервери, особливості Telnet і локального термінала.' },
  de: { title: 'Remora – Nutzungsbedingungen', ogTitle: 'Remora – Nutzungsbedingungen', description: 'Bedingungen für Remora: Free und Pro, Abos und Testphasen, Verantwortung für deine Server, Hinweise zu Telnet und lokalem Terminal.' },
  es: { title: 'Términos de uso de Remora', ogTitle: 'Términos de Remora', description: 'Términos de Remora: Free y Pro, suscripciones y pruebas, tu responsabilidad sobre tus servidores, notas sobre Telnet y el terminal local.' },
  fr: { title: 'Conditions d’utilisation de Remora', ogTitle: 'Conditions de Remora', description: 'Conditions de Remora : Free et Pro, abonnements et essais, responsabilité sur vos serveurs, notes sur Telnet et le terminal local.' },
  pt: { title: 'Termos de uso do Remora', ogTitle: 'Termos do Remora', description: 'Termos do Remora: Free e Pro, assinaturas e testes, responsabilidade pelos seus servidores, notas sobre Telnet e o terminal local.' },
};
