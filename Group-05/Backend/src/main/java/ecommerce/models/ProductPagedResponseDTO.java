package ecommerce.models;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ProductPagedResponseDTO {
	
	private List<ProductResponseDTO> plist;
	
	private int current;
	
	private long total;
	
	private int pagesize;

	public List<ProductResponseDTO> getPlist() {
		return plist;
	}

	public void setPlist(List<ProductResponseDTO> plist) {
		this.plist = plist;
	}

	public int getCurrent() {
		return current;
	}

	public void setCurrent(int current) {
		this.current = current;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

	public int getPagesize() {
		return pagesize;
	}

	public void setPagesize(int pagesize) {
		this.pagesize = pagesize;
	}
	
	

}
