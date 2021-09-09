package org.analiseevolutiva.dsvendas.respositories;

import java.util.List;

import org.analiseevolutiva.dsvendas.dto.SaleSuccessDTO;
import org.analiseevolutiva.dsvendas.dto.SaleSumDTO;
import org.analiseevolutiva.dsvendas.entites.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	@Query("select new org.analiseevolutiva.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "from Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("select new org.analiseevolutiva.dsvendas.dto.SaleSuccessDTO(obj.seller, "
			+ "SUM(obj.visited),"
			+ " SUM(obj.deals)) "
			+ "from Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();	

}
