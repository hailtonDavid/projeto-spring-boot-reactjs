package org.analiseevolutiva.dsvendas.dto;

import java.io.Serializable;

import org.analiseevolutiva.dsvendas.entites.Seller;

public class SaleSuccessDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String sellerName;
	private Long visited;
	private Long deals;

	public SaleSuccessDTO() {

	}

	public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
		sellerName = seller.getName();
		this.setVisited(visited);
		this.deals = deals;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getVisited() {
		return visited;
	}

	public Long getDeals() {
		return deals;
	}

	public void setDeals(Long deals) {
		this.deals = deals;
	}

	public void setVisited(Long visited) {
		this.visited = visited;
	}

}
