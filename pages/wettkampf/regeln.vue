<script setup>
const { event } = await useEvent();

useSeoMeta({
  title: "Regeln / Wettkampf",
  description: "Wettkampfregeln & Haftungsausschluß",
});
</script>

<template>
  <div class="my-6 px-6">
    <div class="content">
      <h2>Die Wettkampfregeln</h2>

      <div class="notification is-danger has-text-light">
        Es ist verboten die Treppen nach unten zu laufen!
      </div>

      <p>
        {{ event.name }} wird in den Wettbewerben
        <span class="tag">Mit PA</span> und
        <span class="tag">Ohne PA</span> durchgeführt.
      </p>
      <h3>Abstand</h3>

      <ul>
        <li>
          Beide Läufer eines Teams dürfen nicht weiter als eine Armlänge
          voneinander entfernt sein:
          <ul>
            <li>Beim Start</li>
            <li>Auf den letzten beiden Etagen vor dem Zieleinlauf</li>
          </ul>
          Streckenposten kontrollieren dort den Abstand.
        </li>
      </ul>

      <h3>Atemschutzgeräte</h3>

      <ul>
        <li>
          Alle Teams müssen Ihre Atemschutzgeräte selber mitbringen, egal ob
          Normal- oder Überdruck bzw. Stahl- oder Compositebehälter.
        </li>
        <li>Es können keine Atemluftbehälter vor Ort befüllt werden !</li>
      </ul>

      <h3>Bekleidung</h3>

      <ul>
        <li>
          Gestartet wird mit Einsatzstiefeln (nach DIN EN 345-2 / S3 oder
          gleichwertig)
        </li>
        <li>
          Einsatzhose und –jacke (Feuerwehrschutzkleidung nach DIN EN 469,
          <em>für den Innenangriff geeignet</em>)
        </li>
        <li>
          Einsatzhandschuhe (nach DIN EN 659,
          <em>keine THL-Handschuhe</em>)
        </li>
        <li>Feuerwehreinsatzhelm</li>
        <li>Atemschutzgerät auf dem Rücken</li>
        <li>
          <span class="tag is-info"
            ><abbr title="Technisches Hilfswerk" class="mr-1">THW</abbr>
            abweichend</span
          >
          Es ist der vollständige Multifunktionale Einsatzschutzanzug (MEA)
          (Variante Atemschutzgeräteträger) <strong>mit</strong> Innenhose zu
          tragen. (gemäß
          <abbr
            title="Richtlinie über die Bekleidung und Kennzeichnung im Technischen Hilfswerk"
            >BeklRiLi</abbr
          >
          2.1.7 & 1.1 Anlage 1)
        </li>
      </ul>
      <p>Die Ausrüstung wird vor dem Start vom Veranstalter überprüft.</p>

      <h3>Disqualifikation</h3>

      <ul>
        <li>Nichteinhaltung der Wettkampfregeln</li>
        <li>Unsportliches Verhalten</li>
        <li>Behinderung der anderen Teilnehmer / Teams</li>
        <li>Manipulation an Schutzausrüstung, Atemschutzgerät oder Maske</li>
        <li>
          Wenn der Abstand zwischen den Startern eines Teams mehr als eine
          Armlänge beträgt
        </li>
        <li>
          Wenn verlorengegangene Ausrüstungsgegenstände nicht selbstständig
          aufgehoben werden
        </li>
        <li>Wenn von der vorgegebenen Wettkampfstrecke abgewichen wird</li>
        <li>
          Wenn ein Teilnehmer Ausrüstungsgegenstände (dazu zählt auch das
          Atemschutzgerät) seines Teamspartners trägt.
        </li>
        <li>
          Wenn ein Teilnehmer seinen Teampartner trägt. Ziehen bzw. schieben ist
          erlaubt
        </li>
        <li>
          Wenn ein Teampartner Teile der Wettkampfausrüstung während des
          Wettkampfes ablegt. Dazu zählen auch Feuerwehrschutzhandschuhe!
        </li>
      </ul>

      <p>
        Bei Disqualifikation (egal ob vor, während oder nach dem Wettkampf) wird
        die Startgebühr als Aufwandsentschädigung einbehalten.
      </p>

      <h3>G26.3</h3>

      <ul>
        <li><span class="tag is-info">ohne PA</span> Wird nicht benötigt</li>
        <li>
          <span class="tag is-info">mit PA</span> ist notwendig! Bei Abholung
          der Startnummer muss eine gültige G26.3 für jeden Teilnehmer
          vorgezeigt werden.
        </li>
      </ul>

      <h3>Feuerwehrhaltegurt</h3>

      <ul>
        <li>Feuerwehrhaltegurt (auch Koppel genant) ist nicht gestattet.</li>
      </ul>

      <h3>Haftungsausschluss</h3>

      <ul>
        <li>
          Der <a href="#haftungsausschluss">Haftungsausschluss</a> muss zum
          Abschließen der Anmeldung anerkannt werden.
        </li>
      </ul>

      <h3>Helmkameras</h3>

      <ul>
        <li>
          Helmkameras dürfen nur dann benutzt werden, wenn sie mit der
          entsprechend dafür vorgesehenen Halterung so fest am Helm angebracht
          sind, dass sie gegen "abfallen" gesichert sind.
        </li>
        <li>Halterungen der Marke "Eigenbau" sind nicht gestattet.</li>
        <li>
          Kameras mit Brustgurt (z.B. GoPro) dürfen benutzt werden, müssen aber
          auch nochmal, z.B. durch eine kurze Bandschlinge, gegen "abfallen"
          gesichert werden!
        </li>
        <li>
          Alle „Anbauten“ werden vor dem Start vom Veranstalter überprüft:
          überstehen sie den „Wackeltest“ nicht, müssen sie abgenommen werden!
        </li>
      </ul>

      <h3>Helmlampen</h3>

      <ul>
        <li>Helmlampen sind nicht gestattet!</li>
      </ul>

      <h3>Maske</h3>

      <ul>
        <li>
          <span class="tag is-info">Ohne PA</span> Eine Maske
          <strong>darf nicht</strong> getragen werden.
        </li>
      </ul>

      <h3>Musik</h3>

      <ul>
        <li>
          Wer beim laufen Musik über Kopfhörer hören möchte, kann dies tun.
        </li>
        <li>
          Wiedergabegerät bitte so verstauen, dass es nicht rausfallen kann.
        </li>
        <li>Verlorene Gegenstände müssen eingesammelt werden!</li>
        <li>
          <strong>Angepasste Lautstärke</strong>: Wenn euch jemand einen
          Überholvorgang ankündigt, solltet ihr dies wahrnehmen können
        </li>
      </ul>

      <h3>Überholen</h3>

      <ul>
        <li>
          Schnellere Teams dürfen nicht behindert werden und müssen auf der
          Treppeninnenseite vorbeigelassen werden.
        </li>
        <li>Dies wird von den Streckenposten kontrolliert.</li>
      </ul>

      <h3>Zubehör</h3>

      <ul>
        <li>
          Zubehör, wie z.B. Keile, FireFly, Karabiner, Tally für die
          Atemschutzüberwachung, etc. sind zu entfernen!
        </li>
        <li>
          Alle „Anbauten“ werden vor dem Start überprüft … überstehen sie den
          „Wackeltest“ nicht, müssen sie abgenommen werden!
        </li>
      </ul>

      <p class="has-text-grey">
        Diese Wettkampfregeln basieren auf den Regeln des
        <a href="http://www.berlin-firefighter-stairrun.de"
          >Berlin Firefighter Stairrun</a
        >
        und wurden entsprechend erweitert.
      </p>
    </div>
  </div>

  <div class="my-6 px-6" id="haftungsausschluss">
    <div class="content">
      <h2>Der Haftungsausschluss</h2>

      <h3>Haftung</h3>

      <p>
        Der Veranstalter übernimmt gegenüber den Teilnehmenden und dritten
        Personen keine Haftung.
      </p>

      <h3>Teilnehmererklärung</h3>

      <p>
        Ohne jegliche Einschränkung der Verantwortlichkeit eines Veranstalters
        hinsichtlich der Durchführung des Wettkampfes gebe ich nachstehende
        Erklärung ab:
      </p>

      <ol>
        <li>
          <strong>Bezeichnung der Risiken</strong>: Ich weiß und bin mir voll
          der Gefahren bewusst, welche die Ausübung des oben genannten
          Wettkampfes beinhaltet. Ich erkenne, dass mit Anstreben
          ausgezeichneter Leistungen ein Risiko verbunden ist, welches darin
          besteht, dass ich meine physischen Fähigkeiten bis zum absoluten Limit
          erstrecken muss. Ich weiß und akzeptiere, dass mit der Ausübung eines
          solchen Wettkampfsportes Leben und körperliche Sicherheit gefährdet
          sein können. Diese Gefahren drohen jedermann im Wettkampf- und
          Trainingsbereich, insbesondere aus den Umweltbedingungen, technischen
          Ausrüstungen, atmosphärischen Einflüssen sowie natürlichen oder
          künstlichen Hindernissen. Ich bin mir bewusst, dass gewisse Abläufe
          nicht immer vorausgesehen oder unter Kontrolle gehalten und daher auch
          nicht ausgeschaltet oder durch Sicherheitsvorkehrungen präventiv
          verhindert werden können. Die Teilnahme am Wettkampf erfolgt auf
          eigenes Risiko. Die Haftung des Veranstalters und der Wettkampfleitung
          gegenüber den Wettkampfteilnehmern wird auf Vorsatz und grobe
          Fahrlässigkeit begrenzt. Die darüber hinausgehende Haftung ist
          ausgeschlossen.
        </li>

        <li>
          <strong>Risikobereitschaft</strong>: Ich muss selbst beurteilen, ob
          die Wettkampf- oder Trainingsstrecke nach den gegebenen Verhältnissen
          für mich nicht zu schwierig ist. Ich erkläre, dass ich offensichtliche
          Sicherheitsmängel unverzüglich der Rennleitung melden werde.
        </li>

        <li>
          <strong>Persönliche Haftung</strong>: Ich bin mir bewusst, dass ich
          persönlich gegenüber Drittpersonen für Schäden zufolge
          Körperverletzungen oder Sachbeschädigung, welche auf meine Teilnahme
          am Training oder am Wettkampf zurückzuführen sind, haftbar sein kann.
          Ich erkenne an, dass es nicht der Verantwortung des Veranstalters
          unterliegt, meine Ausrüstung zu prüfen oder zu überwachen. Ich
          erkläre, mich mit den jeweiligen Wettkampfbestimmungen vertraut zu
          machen. Ich bestätige, den vorstehende Haftungsausschluss gelesen zu
          haben.
        </li>
        <li>
          <strong>Startgeld</strong>: Bei Nichtantritt eines Teilnehmers, oder
          bei Ausfall wegen höherer Gewalt besteht kein Anspruch auf
          Rückerstattung des Startgeldes.
        </li>
      </ol>

      <h3>Unverbindliche Information zum Unfallversicherungsschutz</h3>

      <h4>Freiwillige Feuerwehr</h4>

      <p>
        Für Angehörige der Freiwilligen Feuerwehr einschließlich der
        Jugendfeuerwehr besteht üblicherweise der eigene gesetzliche
        Unfallversicherungsschutz, sofern sie von ihrem zuständigen Kommandanten
        für {{ event.name }} im Rahmen ihres Feuerwehrdienstes entsandt worden
        sind.
      </p>

      <h4>Werk- & Betriebsfeuerwehr</h4>

      <p>
        Angehörige von Werk- & Betriebsfeuerwehren sind üblicherweise dann
        selbst unfallversichert, wenn ihre Teilnahme im Rahmen ihrer beruflichen
        Tätigkeit gemäß § 2 Abs. 1 Nr. 1 SGB VII erfolgt. Zuständiger
        Unfallversicherungsträger ist die jeweilige Fachberufsgenossenschaft,
        bei der das Unternehmen Mitglied ist. Es wird empfohlen, den
        Versicherungsschutz rechtzeitig über den Arbeitgeber zu klären.
      </p>

      <h4>Berufsfeuerwehr</h4>

      <p>
        Beamtinnen und Beamte der Berufsfeuerwehr sind üblicherweise dann selbst
        unfallversichert, wenn ein Unfall anlässlich von
        {{ event.name }}
        als Dienstunfall im Sinne des Beamtenversorgungsgesetzes anzuerkennen
        ist.
      </p>
    </div>
  </div>
</template>
