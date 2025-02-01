import { SmartphoneDetailProvider } from "@/ui/contexts/SmartphoneDetailContext";

export default async function Home({ params }) {
  const { id } = await params;

  return <SmartphoneDetailProvider id={id}>Hola</SmartphoneDetailProvider>;
}
