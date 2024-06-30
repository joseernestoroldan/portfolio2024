import Navbar from "@/components/navbar/Navbar";


export default function SectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
            <Navbar/>
            <div className="w-full">{children}</div>
            <div className="w-full bg-gray-600">footer</div>
        </div>
      

  );
}
