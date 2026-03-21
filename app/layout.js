import './globals.css';

export const metadata = {
  title: "🥃 You're Invited — Birthday Fiesta",
  description: "Taco Bar • Cake • Beers • April 18th at Dias' Place, Elk Grove",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
