function page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>
        Project kedua deploy di <span className="text-red-500">cloudflare</span>
      </p>

      <a href="/" className="text-blue-500 underline">
        Balik Ke Page UTAMA <span className="text-red-500">vercel</span>
      </a>
    </div>
  );
}

export default page;
