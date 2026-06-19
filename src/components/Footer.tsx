const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="mx-auto max-w-md overflow-hidden md:max-w-5xl">
        <h2 className="text-xl font-bold mb-2">Hubungi Saya / Diskusi Proyek</h2>
        <p className="mb-2 text-sm">
          Tertarik untuk membuat website atau punya pertanyaan seputar paket di
          atas? Silakan hubungi saya langsung melalui kontak dibawah ini:
        </p>
        <ul className="text-sm">
          <li>
            WhatsApp: <a href="https://wa.me/081293816977" target="_blank" rel="noopener noreferrer">0812-9381-6977</a>
          </li>
          <li>
            Email: <a href="mailto:lila041aml@gmail.com">lila041aml@gmail.com</a>
          </li>
        </ul>
        <p className="text-sm mt-2">
          Copyright © {new Date().getFullYear()} Lila Amelia | Powered by <a href="https://github.com/lilaaml/portfolio-site-v2" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
