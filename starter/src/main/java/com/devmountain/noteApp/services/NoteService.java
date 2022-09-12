package com.devmountain.noteApp.services;

import com.devmountain.noteApp.dtos.NoteDto;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface NoteService {
    //for adding a note
        @Transactional
        void addNote (NoteDto noteDto, Long userId);

    //for deleting a note
    @Transactional
    void deleteNoteById(Long noteId);

    ///for updating a note
    @Transactional
    void updateNoteById(NoteDto noteDto);
///why did Note Controller create these HERE when I already have them in Impl
    List<NoteDto> getAllNotesByUserId(Long userId);

    Optional<NoteDto> getNoteById(Long noteId);
}
