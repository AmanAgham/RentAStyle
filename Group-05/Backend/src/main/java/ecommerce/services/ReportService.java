package ecommerce.services;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections4.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import ecommerce.entities.Customer;
import lombok.extern.slf4j.Slf4j;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
@Slf4j
public class ReportService {

	@Autowired
	private CustomerService custservice;

	public String exportReport(String reportFormat) throws FileNotFoundException, JRException {

		System.out.println("In PDF service :exportReport ");

		String path = "E:\\server\\reciept";

		List<Customer> allCustomer = custservice.allCustomers();

		// load file and compile it

		File file = ResourceUtils.getFile("classpath:customer.jrxml");
		JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());

		// gettig data source
		JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(allCustomer);
		Map<String, Object> parameters = new HashedMap<>();
		parameters.put("Created By", "Rent-A-Style");

		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);

		if (reportFormat.equalsIgnoreCase("html")) {
			JasperExportManager.exportReportToHtmlFile(jasperPrint, path + "\\customer.html");
		}
		if (reportFormat.equalsIgnoreCase("pdf")) {
			JasperExportManager.exportReportToPdfFile(jasperPrint, path + "\\customer.pdfS");
		}
		return "report generated inpath :" + path;

	}

}

