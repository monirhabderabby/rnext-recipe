import DeliciousCard from "../cards/delicious-card";

const SuperDelicious = () => {
  return (
    <section class="mb-16" id="super_delicious">
      <h2 class="text-3xl font-bold mb-8">Super Delicious</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <DeliciousCard
          img="/thumbs/thumb-5.jpg"
          name="Chicken Meatball with Creamy Cheese"
          time="30 Minutes"
        />
        <DeliciousCard
          img="/thumbs/thumb-6.jpg"
          name="The Creamiest Creamy Chicken"
          time="45 Minutes"
        />
        <DeliciousCard
          img="/thumbs/thumb-7.jpg"
          name="Classic Beef Burger"
          time="30 Minutes"
        />
      </div>
    </section>
  );
};

export default SuperDelicious;
