import ThemeSwitcher from '@/components/ThemeSwitcher';

function Welcome() {
  return (
    <div className="flex h-screen w-screen">
      <div className="mx-auto px-24 py-6">
        <h1 font-bold>Welcome</h1>
        <p>to my pwa app</p>
        <ThemeSwitcher />
        <p className="p-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero
          est magnam aliquam, dignissimos quo eos maiores consequatur dolore
          odit amet nemo sed quod, ad quas, velit voluptate praesentium quam.
          Expedita ducimus ab facere amet praesentium quaerat recusandae vel,
          doloremque dolorum quod sint tempore sed quasi repellat molestiae nisi
          pariatur deserunt cum facilis temporibus ullam provident veniam? Quos,
          consequatur facilis. Facere optio debitis deserunt ullam odio quam
          sapiente, nam voluptatum. Totam inventore sequi incidunt pariatur sed
          consectetur, enim assumenda ratione, officia veniam dolor error
          laudantium quas iusto debitis atque labore!
        </p>
        <img src="https://images.unsplash.com/photo-1707046369711-3c3fc6f2191a?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
}

export default Welcome;
