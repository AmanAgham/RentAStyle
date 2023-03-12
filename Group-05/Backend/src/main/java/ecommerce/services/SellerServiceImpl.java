package ecommerce.services;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ecommerce.daos.SellerDao;
import ecommerce.entities.Seller;

@Service
public class SellerServiceImpl implements SellerService {

	@Autowired private SellerDao dao;
	
	Base64.Encoder encoder=Base64.getMimeEncoder();
	
	@Override
	public Seller registerSeller(Seller seller) {
		// TODO Auto-generated method stub
		
		seller.setPwd(encoder.encodeToString(seller.getPwd().getBytes()));
		Seller registerSeller = dao.findByUserid(seller.getUserid());
		if(registerSeller == null) {
			return dao.save(seller);
		}
		return null;
	}

	@Override
	public List<Seller> allSellers() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Seller findById(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}

	@Override
	public Seller validate(String userid, String pwd) {
		Seller seller=dao.findByUserid(userid);
		System.out.println(seller.toString());
		Base64.Decoder decoder=Base64.getMimeDecoder();
		String dstr2=new String(decoder.decode(seller.getPwd()));
		System.out.println(dstr2);
		if(seller!=null && pwd.equals(dstr2)) {
			return seller;
		}
		return null;
	}

	@Override
	public void deleteSeller(int id) {
		// TODO Auto-generated method stub
		Seller seller=dao.getById(id);
		dao.delete(seller);
	}

}
