export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header>Header</header>
        <main>{children}</main>
      </body>
    </html>
  );
}