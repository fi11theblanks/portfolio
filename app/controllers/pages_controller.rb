class PagesController < ApplicationController
  def home
    @sections = [
      { key: "work", label: "work" },
      { key: "events", label: "events" },
      { key: "now", label: "now" },
      { key: "archive", label: "archive" },
      { key: "contact", label: "contact" }
    ]

    @hero_image = "/hero.jpg"

    @work = [
      { year: "2026", title: "Entrika - Reading the Fine Print", type: "Web Application & Browser Extension", location: "Meguro, Tokyo" },
      { year: "2026", title: "Am I the Villain?", type: "Web Application", location: "Meguro, Tokyo" },
      { year: "2026", title: "Resident @ OUCH - Exhibition", type: "Installation", location: "Zollgarage, Berlin" },
      { year: "2023", title: "Live Painting for Earthquake Relief Event", type: "Performance w/ Batikan Kilicaslan", location: "Gazhane Museum, Istanbul" },
      { year: "2022", title: "Photographer - Altin Gun", type: "Commission Work", location: "Kucukciftlik Park, Istanbul" },
      { year: "2022", title: "Photographer - Franz Ferdinand", type: "Commission Work", location: "LifePark, Istanbul" }
    ]

    @events = [
      { date: "Aug 09", title: "Workshop: Feedback Loops", venue: "CTM Festival", city: "Berlin" },
      { date: "Aug 22", title: "Live Set", venue: "Tresor", city: "Berlin" },
      { date: "Sep 14", title: "Panel: DIY Distribution", venue: "Unsound", city: "Kraków" },
      { date: "Oct 03", title: "Residency Open Studio", venue: "Monom", city: "Berlin" }
    ]

    @now = {
      film: [
        { title: "Pulse (Cairo)", dir: "Kiyoshi Kurasawa", year: "1999" },
        { title: "In the Mood for Love", dir: "Wong Kar-wai", year: "2000" }
      ],
      books: [
        { title: "Tombs of Atuan", author: "Ursula K. Le Guin" },
        { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin" },
        { title: "Dune: Messiah", author: "Frank Herbert" }
      ],
      music: [
        { title: "Blood Orange - Essex Honey" },
        { title: "Headache — Thank You for Almost Everything" },
        { title: "Bassvictim — Basspunk" }
      ]
    }

    @archive = [
      { year: "2022", title: "Tape Loop Evening", type: "event" },
      { year: "2022", title: "Collaborations Vol. 2", type: "release" },
      { year: "2021", title: "RADIO PIECE #001", type: "media" },
      { year: "2021", title: "Open Air — Parking Lot Sessions", type: "event" },
      { year: "2020", title: "Isolation Recordings", type: "release" },
      { year: "2019", title: "First Live Set", type: "event" }
    ]
  end
end
