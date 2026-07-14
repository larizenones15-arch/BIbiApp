<?php

namespace App\DTO;

class DTOUpDown{

    public $ItemID;
    public $filename;
    public $file_path;
    public $original_name;

    



    /**
     * Get the value of ItemID
     */ 
    public function getItemID()
    {
        return $this->ItemID;
    }

    /**
     * Set the value of ItemID
     *
     * @return  self
     */ 
    public function setItemID($ItemID)
    {
        $this->ItemID = $ItemID;

        return $this;
    }

    /**
     * Get the value of filename
     */ 
    public function getFilename()
    {
        return $this->filename;
    }

    /**
     * Set the value of filename
     *
     * @return  self
     */ 
    public function setFilename($filename)
    {
        $this->filename = $filename;

        return $this;
    }

    /**
     * Get the value of file_path
     */ 
    public function getFile_path()
    {
        return $this->file_path;
    }

    /**
     * Set the value of file_path
     *
     * @return  self
     */ 
    public function setFile_path($file_path)
    {
        $this->file_path = $file_path;

        return $this;
    }

    /**
     * Get the value of original_name
     */ 
    public function getOriginal_name()
    {
        return $this->original_name;
    }

    /**
     * Set the value of original_name
     *
     * @return  self
     */ 
    public function setOriginal_name($original_name)
    {
        $this->original_name = $original_name;

        return $this;
    }
}