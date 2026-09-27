# Glass Terrarium Card

Eine benutzerdefinierte Home Assistant Lovelace-Karte im modernen Glassmorphism-Design zur Steuerung und Überwachung von Terrarien.


## Features

- **Übersicht-Tab:**
  - Großanzeige für 2 Sonnenplatz-Temperaturen
  - Bis zu 3 Umgebungszonen-Temperaturen
  - Anzeige für Luftfeuchtigkeit
- **Steuerung-Tab:**
  - Direktes Schalten von Hauptlicht, HID 1 und HID 2
  - Integrierte Dauer-AN / Sperrschalter (`input_boolean`) für Wartung & Beobachtung
  - Betriebsmodus-Auswahl (`input_select`)
  - Einwinterungs-Datumsplaner (`input_datetime`)
- **Zeiten-Tab:**
  - Übersichtliche Darstellung aller Ein- und Ausschaltzeiten
  - Anzeige der Gesamtleuchtdauer
  - Verbleibende Tage bis zur Einwinterung
- **Vollständige Editor-Unterstützung:**
  - Einfache Konfiguration direkt in der Home Assistant Benutzeroberfläche

---

## Installation via HACS (Benutzerdefiniertes Repository)

1. Öffne **HACS** in deinem Home Assistant.
2. Klicke oben rechts auf die drei Punkte (`⋮`) und wähle **Benutzerdefinierte Repositories**.
3. Trage die URL deines GitHub-Repositorys ein:
   `https://github.com/SirUlbrich/glass-terrarium-card`
4. Wähle als Typ **Lovelace** (Plugin) aus und klicke auf **Hinzufügen**.
5. Suche nach `Glass Terrarium Card` und klicke auf **Herunterladen**.
6. Lade dein Dashboard neu.

---

## Manuelle Installation

1. Lade die Datei `glass-terrarium-card.js` aus den [Releases](https://github.com/SirUlbrich/glass-terrarium-card/releases) herunter.
2. Kopiere die Datei in deinen Home Assistant Ordner `/config/www/`.
3. Füge folgende Ressource unter **Einstellungen ➔ Dashboards ➔ Drei Punkte oben rechts ➔ Ressourcen** hinzu:
   - **URL:** `/local/glass-terrarium-card.js`
   - **Ressourcentyp:** `JavaScript-Modul`

---

## Beispiel Dashboard Konfiguration

```yaml
type: custom:glass-terrarium-card
title: Loki's Home
bg_image: /local/images/terrarium_bg.jpg
temp_sun_1: sensor.terrarium_sonnenplatz_1_temp
temp_sun_2: sensor.terrarium_sonnenplatz_2_temp
temp_env_1: sensor.terrarium_zone_1_temp
temp_env_2: sensor.terrarium_zone_2_temp
temp_env_3: sensor.terrarium_zone_3_temp
humidity: sensor.terrarium_luftfeuchtigkeit
light_main: light.terrarium_grundbeleuchtung
hid1: light.terrarium_hid_1
hid2: light.terrarium_hid_2
light_main_sperre: input_boolean.terrarium_grundbeleuchtung_sperre
hid1_sperre: input_boolean.terrarium_hid1_sperre
hid2_sperre: input_boolean.terrarium_hid2_sperre
mode_select: input_select.terrarium_modus
winter_date: input_datetime.terrarium_einwinterung_datum
light_main_time: binary_sensor.terrarium_grundbeleuchtung_zeitplan
hid1_time: binary_sensor.terrarium_hid_1_zeitplan
hid2_time: binary_sensor.terrarium_hid_2_zeitplan