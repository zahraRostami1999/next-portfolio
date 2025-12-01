import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="px-10 bg-(--bg-main)">
      <Component {...pageProps} />
    </div>
  )
}
