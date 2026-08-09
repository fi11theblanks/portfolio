class PagesController < ApplicationController
  before_action :set_content

  def landing
  end

  def about
  end

  def work
  end

  def events
  end

  CONTACT_EMAIL = "aydaselen.pilanci@gmail.com".freeze

  def now
  end

  def contact
  end

  def send_contact
    name = params[:name].to_s.strip
    subject = params[:subject].to_s.strip.presence || "Message from arha.archive"
    body = params[:message].to_s.strip

    mailto = "mailto:#{CONTACT_EMAIL}?subject=#{CGI.escape(subject)}&body=#{CGI.escape("#{name}\n\n#{body}")}".html_safe
    redirect_to mailto
  end

  private

  def set_content
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
      { date: "soon", title: "coming soon", venue: "somewhere", city: "tblisi" }
    ]

    @now = {
      film: [
        { title: "Retribution", dir: "Kiyoshi Kurasawa", year: "2006" },
        { title: "A Scanner Darkly", dir: "Richard Linklater", year: "2006" },
        { title: "Hackers", dir: "John Brumby", year: "1995" }
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

    @friends = [
      { year: "2022", title: "Tape Loop Evening", type: "event" },
      { year: "2022", title: "Collaborations Vol. 2", type: "release" },
      { year: "2021", title: "RADIO PIECE #001", type: "media" },
      { year: "2021", title: "Open Air — Parking Lot Sessions", type: "event" },
      { year: "2020", title: "Isolation Recordings", type: "release" },
      { year: "2019", title: "First Live Set", type: "event" }
    ]
  end
end
