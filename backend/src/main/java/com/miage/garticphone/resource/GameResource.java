package com.miage.garticphone.resource;

import com.miage.garticphone.model.api.GameApiDTO;
import com.miage.garticphone.model.api.UserApiDTO;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/games")
public class GameResource {

    @PostMapping
    @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    public GameApiDTO create(@RequestBody UserApiDTO user) {
        // Should create a new game
        return null; // STUB
    }

    @GetMapping("/{id}")
    @SendTo("/game/{id}/new-user")
    @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    public GameApiDTO join(@PathVariable String id, @RequestBody UserApiDTO user) {
        // Subscribe user to the game websocket and emit to all subscribers than a new player come
        return null; // STUB
    }
}
