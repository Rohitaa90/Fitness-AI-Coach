'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="font-mono font-bold text-sm text-zinc-950 dark:text-zinc-100 mb-4">QUICK LINKS</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
                → Home
              </Link>
              <Link href="/about" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
                → About Us
              </Link>
              <Link href="/pricing" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
                → Pricing
              </Link>
              <Link href="/more-tools" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
                → More Tools
              </Link>
            </nav>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-mono font-bold text-sm text-zinc-950 dark:text-zinc-100 mb-4">ABOUT</h3>
            <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              FITCOACH AI is your personal fitness companion. Get expert guidance on workouts, nutrition, and achieving your fitness goals with AI-powered personalization.
            </p>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="font-mono font-bold text-sm text-zinc-950 dark:text-zinc-100 mb-4">LOCATION</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353!3d-37.8162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf00ef62049ee20a0!2sGoogle!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border border-zinc-200 dark:border-zinc-800"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
            © 2026 FITCOACH AI. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              Privacy
            </a>
            <a href="#" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              Terms
            </a>
            <a href="#" className="font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
