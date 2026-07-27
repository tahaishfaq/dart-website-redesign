import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="resources" className="border-t border-black/5 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <Image
            src="/images/dart-logo.svg"
            alt="Dart Partner"
            width={180}
            height={40}
            className="h-7 w-auto"
            unoptimized
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Restaurant operations, simplified.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dart Partner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
