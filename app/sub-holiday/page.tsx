import Card from "./_components/card"


export default function HolidayPage() {
  return (
    <div className="bg-pink-100 h-screen text-gray-900 flex justify-center items-center gap-4">
      <Card
      imgSrc="/golden-gate.jpg"
      cityName="San Francisco"
      type="Premium Economy"
      />

      <Card imgSrc="/imageSan.jpg" cityName="IKN" type="Business Class" />

    </div>
  );
}