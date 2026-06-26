interface ShopPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { slug } = await params;

  const currentSlug = slug || [];
  const [category, brand, model] = currentSlug;

  return (
    // When have folder [...slug]
    // <div className="p-10 font-sans bg-white min-h-screen">
    //   <h1 className="text-4xl text-black font-black italic uppercase tracking-tighter mb-8">
    //     Catalog / {brand || "All Brands"}
    //   </h1>

    //   <nav className="flex items-center gap-3 mb-10">
    //     <span className="font-medium text-zinc-400">Shop</span>

    //     {slug.map((segment, index) => (
    //       <div key={index} className="flex items-center gap-3">
    //         <span className="text-zinc-300">/</span>
    //         <span className="px-3 py-1 bg-zinc-100 rounded-full text-sm font-bold text-zinc-800">
    //           {segment}
    //         </span>
    //       </div>
    //     ))}
    //   </nav>

    //   <div className="max-w-2xl p-8 bg-zinc-900 rounded-4xl text-white shadow-2xl transition-all hover:scale-[1.01]">
    //     <div className="space-y-4">
    //       <div>
    //         <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
    //           Category
    //         </span>
    //         <p className="text-2xl capitalize font-medium">{category}</p>
    //       </div>
    //       {brand && (
    //         <div>
    //           <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
    //             Brand
    //           </span>
    //           <p className="text-2xl capitalize font-medium">{brand}</p>
    //         </div>
    //       )}
    //       {model && (
    //         <div className="pt-6 border-t border-zinc-800">
    //           <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
    //             Model
    //           </span>
    //           <p className="text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
    //             {model.replace("-", " ")}
    //           </p>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   <p className="mt-10 text-[10px] text-zinc-400 font-mono bg-zinc-50 p-3 rounded border border-zinc-100 inline-block">
    //     [DEBUG] Raw segments array: {JSON.stringify(slug)}
    //   </p>
    // </div>

    // When have folder [[...slug]]
    <div className="p-10 font-sans bg-white min-h-screen">
      <header className="mb-10">
        <h1 className="text-5xl text-black font-black uppercase tracking-tighter">
          {category ? `Catalog / ${category}` : "Main Store"}
        </h1>
        <p className="text-zinc-400 mt-2 font-medium">
          {brand ? `Exploring ${brand} collection` : "Browse all our products"}
        </p>
      </header>

      <nav className="flex items-center gap-2 mb-8">
        <span className="text-zinc-900 font-bold">Shop</span>
        {currentSlug.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500 capitalize">{s}</span>
          </div>
        ))}
      </nav>

      <div className="grid grid-cols-1 gap-6">
        {!category && (
          <div className="p-20 bg-black text-white rounded-[3rem] text-center">
            <h2 className="text-3xl font-bold">Добро пожаловать в магазин!</h2>
            <p className="opacity-50 mt-2">
              Выберите категорию выше, чтобы начать.
            </p>
          </div>
        )}

        {category && (
          <div className="p-8 bg-white border border-zinc-200 rounded-4xl shadow-sm">
            <p className="text-xs font-mono text-blue-500 font-bold uppercase">
              Active Filter
            </p>
            <div className="mt-4 space-y-2 text-black">
              <p>
                <strong>Category:</strong> {category}
              </p>
              {brand && (
                <p>
                  <strong>Brand:</strong> {brand}
                </p>
              )}
              {model && (
                <p>
                  <strong>Model:</strong> {model}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <p className="mt-10 p-4 bg-zinc-200/50 rounded-xl font-mono text-[10px] text-zinc-500">
        [DEBUG] slug_state = {JSON.stringify(currentSlug)}
      </p>
    </div>
  );
}
