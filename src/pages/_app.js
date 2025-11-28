import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="px-10 bg-rose-200 dark:bg[var(--bg-primary))]">
      <Component {...pageProps} />
    </div>
  )
}
