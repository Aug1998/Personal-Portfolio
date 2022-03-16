import React, { Component } from 'react';
import './portfolio.scss'
import PortfolioItem from './portfolioItem';
import PortfolioButton from './portfolioButton';
import { portfolioData } from './portfolioData';
import Pagination from '../../../../Components/Pagination/pagination';
import $ from "jquery";

class ItemShowcase extends Component {
    state = {  
        keyword : "",
        items: portfolioData,
        activePage: 1,
        itemsPerPage: 6,
        pageCount: null
    };

    renderPortfolio = () => {
        const viewedItems = (this.state.activePage - 1) * this.state.itemsPerPage;
        //Si hay un filtro seleccionado
        if (this.state.keyword !== "") {
            
            return(
                this.state.items
                    .filter(item => item.desc === this.state.keyword)
                    .slice(viewedItems, this.state.itemsPerPage)
                    .map(item => this.displayPortfolioItem(item))
            )
            
        //Si no hay filtro seleccionado
        } else {
            return(
                this.state.items
                    .slice(viewedItems, this.state.itemsPerPage * this.state.activePage)
                    .map(item => this.displayPortfolioItem(item))
            )
        }
        
    }

    displayPortfolioItem = (item) => {
        return <PortfolioItem 
                    key={item.id}
                    title={item.title}
                    desc={item.desc}
                    link={item.link}
                    img={item.img}
                    info1={item.info1}
                    info2={item.info2}
                    info3={item.info3}
                />
    }

    handleFilter = (filter) => {
        $('.portfolio_item_info').removeClass("portfolio_item_info_active");
        //calcular cuantas paginas tiene la categoría
        var filterPageCount;
        if (filter !== "") {
            filterPageCount = Math.ceil((this.state.items.filter(item => item.desc === filter).length) / this.state.itemsPerPage);
        } else {
            filterPageCount = Math.ceil((this.state.items.length) / this.state.itemsPerPage);
        }

        this.setState({
            keyword : filter,
            pageCount: filterPageCount,
            activePage: 1
        });

        $(".paginationContainer ul li button").removeClass("pagActive");
        $(".paginationContainer ul li:nth-of-type(1) button").addClass("pagActive");
    }

    handlePageChange = (clickedPage) => {
        console.log(clickedPage);
        $(".paginationContainer ul li button").removeClass("pagActive");
        $(".paginationContainer ul li:nth-of-type("+ clickedPage +") button").addClass("pagActive");
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#anchor_portfolio_btn").offset().top,
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
            scrollTop: $("#anchor_portfolio_btn").offset().top,
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
            scrollTop: $("#anchor_portfolio_btn").offset().top,
            easing: "linear"
        }, 600);
        
        setTimeout(() => {
            this.setState(
                { activePage : prevPage }
            )    
        }, 600);
    }

    updateItemEvents = () => {
        // hover/click effect on items depending on the viewport
        if ($(window).width() > 1024) {
            $('.portfolio_item').on("mouseover", function(){
                $(this).find('.portfolio_item_info').addClass("portfolio_item_info_active");
            });
            
            $('.portfolio_item').on("mouseout", function(){
                $(this).find('.portfolio_item_info').removeClass("portfolio_item_info_active");
            });      
        } else {
            $('.portfolio_item_info').on("click", function(e){
                //prevents link from triggering if the link isn't visible
                if (!$(this).hasClass("portfolio_item_info_active")) {
                    e.preventDefault();
                }
                $('.portfolio_item_info').removeClass("portfolio_item_info_active");
                $(this).addClass("portfolio_item_info_active");
            });
        }
    }

    componentDidMount() {
        // hover/click effect on items depending on the viewport
        if ($(window).width() < 1024) {
            this.setState(
                {itemsPerPage: 4}
            );
        }

        this.updateItemEvents();

        //Cuando se inicializa el portfolio se calculan las paginas en base al total de items
        if (this.state.pageCount === null) {
            const pageCount = Math.ceil(this.state.items.length / this.state.itemsPerPage)
            this.setState(
                {pageCount: pageCount}
            ); 
        }
    }

    componentDidUpdate() {
        this.updateItemEvents();
    }

    render() { 
        //set the first page of the portfolio as Active
        $(window).on("load", function(){
            $(".paginationContainer ul li:nth-of-type(1) button").addClass("pagActive");
        });
        
        return (  
            <div className="portfolio_wrapper">
                <div className="portfolio_nav">
                    <PortfolioButton text="Todo"
                        className={this.state.keyword === "" ? 'active' : ''}           onFilter={() => this.handleFilter("")}/>

                    <PortfolioButton text="Web a medida" id="btn_webdev"
                        className={this.state.keyword === "Webdev" ? 'active' : ''}     onFilter={() => this.handleFilter("Webdev")}/>

                    <PortfolioButton text="WordPress" id="btn_wp"
                        className={this.state.keyword === "WordPress" ? 'active' : ''}  onFilter={() => this.handleFilter("WordPress")}/>

                    <PortfolioButton text="Arreglos" id="btn_arreglos"
                        className={this.state.keyword === "Arreglos" ? 'active' : ''}   onFilter={() => this.handleFilter("Arreglos")}/>
                </div>

                <div className="portfolio_content">
                    {this.renderPortfolio()}
                </div>

                <Pagination 
                    pageCount={this.state.pageCount} 
                    changePage={() => this.handlePageChange}
                    prevPageClick={this.handlePrevPage}
                    nextPageClick={this.handleNextPage}
                />
            </div>
        );
    }
}
 
export default ItemShowcase;