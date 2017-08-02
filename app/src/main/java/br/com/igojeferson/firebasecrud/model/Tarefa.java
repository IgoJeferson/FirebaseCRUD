package br.com.igojeferson.firebasecrud.model;

import com.google.firebase.database.IgnoreExtraProperties;

@IgnoreExtraProperties
public class Tarefa {

    public Tarefa(String descricao) {
        this.descricao = descricao;
    }

    private String descricao;

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
