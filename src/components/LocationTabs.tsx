import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function LocationTabs() {
  return (
    <Tabs defaultValue="bangu" className="w-full h-full">
      <TabsList className="flex flex-col h-full bg-transparent gap-2">
        <TabsTrigger value="bangu" 
          className="
          bg-primary 
          w-full 
          p-4 
          rounded-lg 
          border
          border-primary
          data-[state=active]:bg-primary
          data-[state=active]:border-white
          data-[state=active]:text-white
          text-white
          text-2xl
          tracking-wide
          "
        >
            Bangu
          </TabsTrigger>
      </TabsList>
      <TabsContent value="bangu">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.065814814723!2d-43.46004792377237!3d-22.874027036702795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdf892b129d0b%3A0xc1b49bf6beae827a!2sAcademia%20i9Fit%20-%20Guilherme%20da%20Silveira!5e0!3m2!1spt-BR!2sbr!4v1722912855550!5m2!1spt-BR!2sbr" width="600" height="450" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full rounded-lg"></iframe>
      </TabsContent>
    </Tabs>
  )
}

export default LocationTabs;
