package br.com.sitedoph.springrestangular.dominio.repositorios;

import br.com.sitedoph.springrestangular.dominio.entidades.Tarefa;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface TarefaRepository extends PagingAndSortingRepository<Tarefa, Long> {

    List<Tarefa> findByArquivada(@Param("arquivada") boolean arquivada);

}
