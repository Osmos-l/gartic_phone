package com.miage.garticphone.model.api;

import java.util.UUID;
import com.miage.garticphone.model.enums.Pictures;

public class UserApiDTO {

    private UUID id;

    private String pseudo;

    private Pictures picture;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public Pictures getPicture() {
        return picture;
    }

    public void setPicture(Pictures picture) {
        this.picture = picture;
    }
}
