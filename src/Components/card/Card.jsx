export default function Card( {card  , index} ) {
    return (
        <div class="col-md-6 mb-3 mb-sm-0 mt-4">
        <div
          class="card"
          style={{
            backgroundColor: "#f6f6f6",
            border: "none",
          }}
        >
          <div class="card-body p-5">
            <h4 className="p-5 d-flex justify-content-center align-items-center">
            {card.question}
            </h4>
          </div>
        </div>
      </div>
    )
}