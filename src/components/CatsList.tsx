import { type Cat } from '../types';
import { LikeToggle } from './LikeToggle';

export function CatsList({ cats }: { cats: Cat[] }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cats.map((cat) => (
        <CatsCard key={cat.id} cat={cat} />
      ))}
    </ul>
  );
}

// ts check step
type CatCardProps = {
  cat: Cat;
};

function CatsCard({ cat }: CatCardProps) {
  return(
    <li
          key={cat.id}
          className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
        >
          <img
            className="aspect-square object-cover"
            alt={cat.name}
            src={cat.imagePath}
          />
          <div className="gap flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2">
              <p className="font-semibold">{cat.name}</p>
              <span className="text-slate-300">·</span>
              <p className="text-slate-500">{cat.vibe}</p>
            </div>
            <LikeToggle />
          </div>
        </li>
  )
}