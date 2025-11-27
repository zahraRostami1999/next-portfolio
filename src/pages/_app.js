import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="px-10 bg-rose-200 dark:bg-neutral-600">
      <Component {...pageProps} />
    </div>
  )
}
