import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sulla privacy del sito DG Designer.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 md:py-24">
      <article className="container max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">
          Privacy Policy di DG Designer
        </h1>

        <p className="mt-4 text-muted-foreground">
          Ultimo aggiornamento: 25 giugno 2026
        </p>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <p className="mt-3 text-muted-foreground">
           Benvenuto su dgdesigner.site. La tua privacy è molto importante per me. In questa pagina ti spiego, in modo semplice e trasparente, quali dati personali raccolgo attraverso il sito, come li utilizzo e quali sono i tuoi diritti.
           Questa informativa è resa ai sensi del Regolamento UE 2016/679 (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">1. Titolare del Trattamento dei Dati</h2>
            <p className="mt-3 text-muted-foreground">
          Il titolare del trattamento dei dati raccolti tramite questo sito è:<br/>
        Nome: Davide Giuliano <br />
        Sito Web: dgdesigner.site <br />
        Email di contatto: : info@dgdesigner.site
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. Quali Dati Raccolgo e Perché</h2>
            <h3 className="text-xl">A. Dati forniti volontariamente dall'utente (Form di Contatto)</h3>
            <p className="mt-3 text-muted-foreground">
             Quando utilizzi il form di contatto per richiedere informazioni sui servizi, preventivi o dettagli sui prezzi, ti chiedo di inserire:

                Nome e/o Cognome (per sapere come rivolgermi a te)

                Indirizzo Email (per poterti rispondere)

                Testo del messaggio (qualsiasi informazione tu decida di condividere)

                Finalità: Rispondere alle tue richieste di informazioni o preventivi.
                Base giuridica: Il trattamento si basa sull'esecuzione di misure precontrattuali adottate su tua richiesta (Art. 6, par. 1, lett. b del GDPR).
            </p>
            <h3 className="text-xl">B. Dati di Navigazione</h3>
             <p className="mt-3 text-muted-foreground">
             Il trattamento dei dati viene effettuato con strumenti informatici, adottando tutte le misure di sicurezza necessarie a prevenire accessi non autorizzati, divulgazione o modifica dei dati.

Destinatari: I tuoi dati non vengono venduti, affittati o ceduti a terzi per scopi commerciali. Saranno letti solo da me per gestire la tua richiesta.

Trasferimento all'estero: I dati sono conservati su server protetti situati all'interno dell'Unione Europea.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Come Vengono Trattati e Conservati i Dati</h2>
            <p className="mt-3 text-muted-foreground">
Il trattamento dei dati viene effettuato con strumenti informatici, adottando tutte le misure di sicurezza necessarie a prevenire accessi non autorizzati, divulgazione o modifica dei dati.

Destinatari: I tuoi dati non vengono venduti, affittati o ceduti a terzi per scopi commerciali. Saranno letti solo da me per gestire la tua richiesta.

Trasferimento all'estero: I dati sono conservati su server protetti situati all'interno dell'Unione Europea.            </p>
          </section>
            <section>
            <h2 className="text-2xl font-bold">4. Periodo di Conservazione</h2>
            <p className="mt-3 text-muted-foreground">
Conservo i dati raccolti tramite il form di contatto solo per il tempo strettamente necessario a gestire la tua richiesta (es. il tempo di formulare il preventivo e scambiare le informazioni necessarie).

Se la richiesta si trasforma in una collaborazione professionale, i dati saranno conservati per la durata del contratto e secondo gli obblighi di legge.

Se la richiesta non ha seguito, i dati verranno cancellati entro 6 mesi dall'ultimo contatto.        
</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">5. I Tuoi Diritti (GDPR)</h2>
            <p className="mt-3 text-muted-foreground">
            In quanto utente, hai il pieno controllo sui tuoi dati. In qualsiasi momento puoi scrivermi a [Inserisci la tua email qui] per esercitare i seguenti diritti:

Accesso: Chiedere quali dati conservo che ti riguardano.

Rettifica: Chiedere di correggere o aggiornare i tuoi dati.

Cancellazione ("Oblio"): Chiedere la cancellazione immediata dei tuoi dati.

Limitazione o Opposizione: Opporsi al trattamento dei dati.

Hai inoltre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it) se ritieni che il trattamento violi le norme vigenti.
            </p>
          </section>
           <section>
            <h2 className="text-2xl font-bold">6. Cookie</h2>
            <p className="mt-3 text-muted-foreground">
            Questo sito utilizza solo cookie tecnici strettamente necessari al funzionamento del sito e, eventualmente, cookie analitici anonimizzati (che non tracciano la tua identità ma servono solo a me per capire quante visite riceve il sito). Non viene fatto uso di cookie di profilazione o tracciamento pubblicitario di terze parti.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}