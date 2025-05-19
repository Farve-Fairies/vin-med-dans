# Vin med Dans

## Terminal commands

- Start Astro: 'npm create astro@latest'

- Prettier plugin: 'npm i --save-dev prettier prettier-plugin-astro'

- Run live server: 'npm run build'

## Workflow

**ALDRIG** arbejd i main branch! Hvis det alligevel sker ved en fejl, søg da rågivning hos Rosalina om hvordan vi fixer det ♡ Men lad endelig vær med at committe !! (Hvis det ikke er for sent)

### 1. Opret din branch før du går i gang!

Når du skal til at arbejde, så start altid med at pull i main, så alt indhold er up-to-date. Herefter opretter du din branch og navngiver den efter følgende guide:

- **Git branches & navngivning**

Når en branch oprettes, navngives den således:

'feature-(filnavn)-(navn)'

Eksempel: 'Feature-HeroSection-Rosalina'

Når der foretages et 'commit' fra en branch navngives det altid vha. verber i bydeform eks. "Tilføj", "Slet", "Finpuds".
Man bestemmer selv, om man vil bruge dansk eller engelsk.

Eksempel: "Tilføj billede" / "Add image".

Når man er færdig med et feature eller af anden grund er færdig med at arbejde i den pågældende branch, stager man først alle ændringerne i et commit.
Derefter trykker man 'Publish Branch' og evt. 'Sync changes' for at merge.
Herfra skal man ind i GitHub for at godkende sin merge til main.
Når man skal arbejde videre, opretter man en ny branch og følger samme procedure.

OBS! Man kan **IKKE** merge fra samme branch flere gange! Opret derfor altid en ny branch, før du arbejder videre.
Her er det en god idé først at skifte fra din gamle branch til main, så du igen kan pulle fra main før du arbejder videre i en ny branch.

- **Opsummering**

Flowet er altså såldes:

1. 'Pull' i main-branch.

2. Opret ny branch.

3. Lav arbejdet og commit (enten løbende, til slut eller begge).

4. Publish branch og merge via GitHub.

5. Gå tilbage i main og pull igen (start igen fra punkt 1.)

### 3. Astro components

Når man skal arbejde på en ny component placeres filen i 'src/components/'. Her navngives altid med stort forbogstav og slutter på '.astro'.

Eksempel: 'Header.astro'.

### 4. Astro pages

Alle Astro-pages skal bygges vha. importeret Astro-layout og Astro-komponenter.
For at importere følgende, skriver du det ind i fences i toppen af dokumentet.

"Fences" er 6 bindestreger fordelt på 2 linjer à 3 bindestreger på hver linje. Inden for dem kan man importere Astro-komponenter og oprette konstanter/Astro-props.

- Eksempel:

'

---

import Layout from "../layouts/Layout.astro";
import Header from "../components/Header.astro";
const {title} = Astro.props;

---

< Layout >
< Hero />
< h1 >Velkommen< /h1 >
< CTA1 text="Læs mere" />
< /Layout>
'

### 5. Astro layout

Layoutfilen indeholder skelettet for alle for HTML-siderne samt grundlæggende elementer bl.a. header og footer.
Layout-filen er også koblet til fælles base-CSS som bl.a. definerer sidernes max-width, font-styles mm.

Ved at alle HTML-sider bygges i dette samme layout sikrer vi at de er ensartede.

### 6. CSS og styling

CSS-styling foregår primært inline i hvert Astro-komponent. Dvs. i en komponent-fil indsættes der styling nederst i dokumentet såldes:

'

<style>
    /* din CSS */
</style>

'

Generel styling som fonte, farver og størrelser er defineret i base.css.
Hvis der opstår problemer pga. base.css eller du opdager en mangel/rettelse til base.css, aftal da med gruppen, hvordan vi gør, så der ikke opstår konflikter i forbindelse med branch-merging.

### 7. Billedfiler

Alle billedfiler undtagen svg'er skal være konverteret til webp.
Billeder placeres i kategoriserede mapper og hver enkel billedfil navngives så simpelt som muligt.
Mapperne er kategoriseret som hhv. 'billeder', 'icons' og 'illustrationer'.
I mappen 'billeder' findes der undermapper med billeder tilhørende hver side.
