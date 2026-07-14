<?php

namespace App\DTO;

class DTOLogin{
    public $DepartmentID;
    public $DepartmentName;
    public $SectionID;
    public $SectionName;
    public $employee_code;
    public $employee_name;


    
   


    /**
     * Get the value of DepartmentID
     */ 
    public function getDepartmentID()
    {
        return $this->DepartmentID;
    }

    /**
     * Set the value of DepartmentID
     *
     * @return  self
     */ 
    public function setDepartmentID($DepartmentID)
    {
        $this->DepartmentID = $DepartmentID;

        return $this;
    }

    /**
     * Get the value of DepartmentName
     */ 
    public function getDepartmentName()
    {
        return $this->DepartmentName;
    }

    /**
     * Set the value of DepartmentName
     *
     * @return  self
     */ 
    public function setDepartmentName($DepartmentName)
    {
        $this->DepartmentName = $DepartmentName;

        return $this;
    }

    /**
     * Get the value of SectionID
     */ 
    public function getSectionID()
    {
        return $this->SectionID;
    }

    /**
     * Set the value of SectionID
     *
     * @return  self
     */ 
    public function setSectionID($SectionID)
    {
        $this->SectionID = $SectionID;

        return $this;
    }

    /**
     * Get the value of SectionName
     */ 
    public function getSectionName()
    {
        return $this->SectionName;
    }

    /**
     * Set the value of SectionName
     *
     * @return  self
     */ 
    public function setSectionName($SectionName)
    {
        $this->SectionName = $SectionName;

        return $this;
    }

    /**
     * Get the value of employee_code
     */ 
    public function getEmployee_code()
    {
        return $this->employee_code;
    }

    /**
     * Set the value of employee_code
     *
     * @return  self
     */ 
    public function setEmployee_code($employee_code)
    {
        $this->employee_code = $employee_code;

        return $this;
    }

    /**
     * Get the value of employee_name
     */ 
    public function getEmployee_name()
    {
        return $this->employee_name;
    }

    /**
     * Set the value of employee_name
     *
     * @return  self
     */ 
    public function setEmployee_name($employee_name)
    {
        $this->employee_name = $employee_name;

        return $this;
    }
}