var parentContainer = "#anchor_portfolio_btn";

handlePageChange = (clickedPage) => {
    console.log(clickedPage);
    $(".paginationContainer ul li button").removeClass("pagActive");
    $(".paginationContainer ul li:nth-of-type("+ clickedPage +") button").addClass("pagActive");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(parentContainer).offset().top,
        easing: "linear"
    }, 600);

    setTimeout(() => {
        this.setState(
            { activePage : clickedPage }
        )    
    }, 600);
}

handleNextPage = () => {
    if (this.state.pageCount === this.state.activePage) {
        return
    }
    const nextPage = this.state.activePage + 1;

    $(".paginationContainer ul li button").removeClass("pagActive");
    $(".paginationContainer ul li:nth-of-type("+ nextPage +") button").addClass("pagActive");
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $(parentContainer).offset().top,
        easing: "linear"
    }, 600);
    
    setTimeout(() => {
        this.setState(
            { activePage : nextPage }
        )    
    }, 600);
}

handlePrevPage = () => {
    if (this.state.activePage === 1) {
        return
    }
    const prevPage = this.state.activePage - 1;

    $(".paginationContainer ul li button").removeClass("pagActive");
    $(".paginationContainer ul li:nth-of-type("+ prevPage +") button").addClass("pagActive");

    $([document.documentElement, document.body]).animate({
        scrollTop: $(parentContainer).offset().top,
        easing: "linear"
    }, 600);
    
    setTimeout(() => {
        this.setState(
            { activePage : prevPage }
        )    
    }, 600);
}

componentDidMount() {
    //Cuando se inicializa el portfolio se calculan las paginas en base al total de items
    if (this.state.pageCount === null) {
        const pageCount = Math.ceil(this.state.items.length / this.state.itemsPerPage)
        this.setState(
            {pageCount: pageCount}
        ); 
    }
}

<Pagination 
    // initialize null
    pageCount={this.state.pageCount}
    changePage={() => this.handlePageChange}
    prevPageClick={this.handlePrevPage}
    nextPageClick={this.handleNextPage}
/>
