import Flag from 'react-world-flags'

const Categories = () => {

  return (

    <section className="text-center container mb-5 px-0">
      <div className="row">

        <div className="d-flex justify-content-between">

          <a href="/offers?categories=Italy">
            <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block">
            <Flag code="it" />
            <br />
            <div className="mt-2">Italy</div>
            </div>
          </a>


          <a href="/offers?categories=German">
            <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block">
            <Flag code="de" />
            <br />
            <div className="mt-2">German</div>
          </div>
          </a>

          <a href="/offers?categories=Greek">
          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block">
            <Flag code="gr" />
            <br />
            <div className="mt-2">Greek</div>
          </div>
          </a>

          <a href="/offers?categories=Spain">
          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block">
          <Flag code="es" />
            <br />
            <div className="mt-2">Spain</div>
          </div>
          </a>

          <a href="/offers?categories=Mexican">
          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block">
            <Flag code="mx" />
            <br />
            <div className="mt-2">Mexican</div>
          </div>
          </a>

          <a href="/offers?categories=Nepali">
          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block">
            <Flag code="np" />
            <br />
            <div className="mt-2">Nepali</div>
          </div>
          </a>

        </div>

      </div>
    </section>

  );
};

export default Categories;
