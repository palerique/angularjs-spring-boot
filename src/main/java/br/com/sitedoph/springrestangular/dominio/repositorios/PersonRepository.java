package br.com.sitedoph.springrestangular.dominio.repositorios;

import java.util.List;

import br.com.sitedoph.springrestangular.dominio.entidades.Person;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {

	List<Person> findByLastName(@Param("name") String name);

}
