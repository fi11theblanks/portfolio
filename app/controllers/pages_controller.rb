class PagesController < ApplicationController
  before_action :set_content

  def landing
  end

  def about
    render :landing
  end

  def work
  end

  def poems
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
    @hero_image = "/hero.JPG"

    @work = [
      { year: "2026", title: "Entrika - Reading the Fine Print", type: "Web Application & Browser Extension", location: "Meguro, Tokyo", photo: "260605_DemoDay-9.jpg", link: "https://entrika.online" },
      { year: "2026", title: "Am I the Villain?", type: "Web Application", location: "Meguro, Tokyo", photo: "am_I_the_villain.png", link: "https://who-is-the-villain-lhordes-1a13aa3df7f5.herokuapp.com" },
      { year: "2026", title: "OUCH @ Zollgarage - Exhibition", type: "Installation", location: "Zollgarage, Berlin", photo: "ouch.png", link: "https://example.com/ouch" },
      { year: "2023", title: "Live Painting for Earthquake Relief Event", type: "Performance w/ Batikan Kilicaslan", location: "Gazhane Museum, Istanbul", photo: "", link: "" },
      { year: "2022", title: "Photographer - Altin Gun", type: "Commission Work", location: "Kucukciftlik Park, Istanbul", photo: "", link: "" },
      { year: "2022", title: "Photographer - Franz Ferdinand", type: "Commission Work", location: "LifePark, Istanbul", photo: "", link: "" }
    ]

    @poems = [
      {
        title: "short_lived_quiet_bliss.zip",
        year: "2024",
        body: "silver dagger resting on a chest\ninside, there is nothing but the best\nbest one for me,\nregarding the lives I’ve had\n\ntwenty four feels just like yesterday\nand I am not even twenty-three\n\nbought that for your birthday\nfreshly sober-almost-not fully\nyou knew that someone like me, hardly commits\n\nonce I’m twenty-three,\nnothing’ll feel like home to me\neven your arms and the palm trees\nthe smallest town I’ve ever lived in\n\nshouldn’t be holding her\nlike twenty-four’s last december\nhoping to fill all desires,\nby the resting head of a stranger\n\nso with the dopamine the opiates gave me\nI gave you an intimate kiss\npromised to get a little better\nshort-lived,\nquiet bliss."
      },
      {
        title: "night_time_lullaby.mp3",
        year: "2026",
        body: "syncope is caused by chemical burns\nit causes the air to turn into smoke\n\non the couch belonging to one of my close friends,\nI ask to myself if this is the end\npoint zero three is all the body needs to feel nothing\nexcept love\nthat is still there, even when you're asleep\n\nalmost touched by the devil\n it sends shivers down your spine\nthe night comes\nand on the screen of an artificial dome,\nsome stars begin to shine"
      }
    ]

    @events = [
      { date: "soon", title: "coming soon", venue: "somewhere", city: "tblisi" }
    ]

    @now = {
      film: [
        { title: "Retribution", dir: "Kiyoshi Kurasawa", year: "2006" },
        { title: "A Scanner Darkly", dir: "Richard Linklater", year: "2006" }
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
