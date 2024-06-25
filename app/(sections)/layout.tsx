

export default function SectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
            <div>navbar</div>
            <div>{children}</div>
            <div>footer</div>
        </div>
      

  );
}
