import Image from 'next/image';

export default function DesktopFooter() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Safety', href: '#safety' },
      { label: 'Trust & Security', href: '#trust' },
      { label: 'Contact Us', href: '#contact' },
    ],
    legal: [
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Insurance', href: '#insurance' },
    ],
    community: [
      { label: 'Blog', href: '#blog' },
      { label: 'Community Guidelines', href: '#guidelines' },
      { label: 'Refer a Friend', href: '#refer' },
      { label: 'Become a Lender', href: '#lender' },
    ],
  };

  return (
    <footer className="hidden lg:block bg-white dark:bg-[#221210] border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo/Kuthakai_Logo.png"
                alt="Kuthakai"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-base font-bold text-[#f86b59]">
                kuthakai
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              India&apos;s trusted peer-to-peer rental marketplace
            </p>
            <div className="flex gap-3">
              <a href="#facebook" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-[#f86b59] hover:text-white transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-[#f86b59] hover:text-white transition-colors">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#instagram" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-[#f86b59] hover:text-white transition-colors">
                <span className="text-sm">📷</span>
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-[#f86b59] hover:text-white transition-colors">
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#181211] dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#f86b59] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[#181211] dark:text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#f86b59] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#181211] dark:text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#f86b59] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-[#181211] dark:text-white mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#f86b59] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Kuthakai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#f86b59] transition-colors">
              English
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#f86b59] transition-colors">
              ₹ INR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
