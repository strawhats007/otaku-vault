import React from 'react';

export const FilterSidebar = () => {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-heading font-bold text-primary text-lg mb-4">Category</h3>
          <div className="space-y-2">
            {[
              { name: 'All Figures', count: 48 },
              { name: 'Action Figures', count: 15 },
              { name: 'Nendoroids', count: 12 },
              { name: 'Figma', count: 8 },
              { name: 'Statues/PVC', count: 13 },
            ].map(cat => (
              <label key={cat.name} className="filter-option flex items-center justify-between p-2 rounded-lg cursor-pointer">
                <span className="text-sm text-gray-700">{cat.name}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{cat.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-heading font-bold text-primary text-lg mb-4">Price Range</h3>
          <div className="space-y-3">
            <input type="range" min="500" max="10000" defaultValue="5000" className="w-full accent-accent" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>৳500</span>
              <span>৳10,000</span>
            </div>
            <div className="flex gap-2">
              <input type="number" placeholder="Min" defaultValue="500" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2" />
              <input type="number" placeholder="Max" defaultValue="10000" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Scale */}
        <div className="mb-6">
          <h3 className="font-heading font-bold text-primary text-lg mb-4">Scale</h3>
          <div className="space-y-2">
            {['1/4 Scale', '1/7 Scale', '1/8 Scale', 'Chibi/SD'].map(scale => (
              <label key={scale} className="flex items-center gap-2 cursor-pointer p-1">
                <input type="checkbox" className="w-4 h-4 accent-accent rounded border-gray-300" />
                <span className="text-sm text-gray-700">{scale}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h3 className="font-heading font-bold text-primary text-lg mb-4">Availability</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer p-1">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-accent rounded border-gray-300" />
              <span className="text-sm text-gray-700">In Stock</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer p-1">
              <input type="checkbox" className="w-4 h-4 accent-accent rounded border-gray-300" />
              <span className="text-sm text-gray-700">Pre-order</span>
            </label>
          </div>
        </div>

        <button className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-xl font-semibold transition-all">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};
