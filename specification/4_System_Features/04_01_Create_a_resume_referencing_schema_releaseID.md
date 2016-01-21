#   4.1 Create a resume object referencing schema releaseID

```
    4.1.1 Description and priority

          Capture the resume data from the Job Seeker into
          an object defined by the schema 'Candidate Person'
          and store in a format such that there is a one to
          one corrletion between the schema key names and
          the object key names.
    
    4.1.2 Action/result
    
    4.1.3 Functional requirements
    
    4.1.3.1 A copy of the Schema at a given releaseID
            from hropenstandards.org determines the local
            data structure.

            For example in psuedocode:
            compare
            schema_JSON3.3     ===  schema_JSON3.3 //true
            (hropenstandards)      (local)

            OR

            schema_xml3.3     ===  schema_xml3.3 //true
            (hropenstandards)      (local)

    4.1.3.2 The schema structure must translate from from
            one format and back without changing the
            integrity or structure.

            For example in psuedocode:
            translate
            schema_xml3.3 -> schema_json3.3 -> schema_xml3.3
            compare
            schema_xml3.3 === schema_xml3.3 //true
            
            OR
            translate
            schema_json3.3 -> schema_xml3.3 -> schema_json3.3
            compare
            schema_json3.3 === schema_json3.3 //true

    4.1.3.3 The data structure must translate from from
            one format and back without changing the
            data integrity or structure.

            For example in psuedocode:
            translate
            startDataXml3.3 -> dataJson3.3 -> endDataXml3.3
            compare
            startDataXml3.3 === endDataXml3.3 //true

            OR
            translate
            startDataJson3.3 -> dataXml3.3 -> endDataJson3.3
            compare
            startDataJson3.3 === endDataJson3.3 //true
            
    4.1.3.4 The views must accurately create and store
            Candidate Person model data according the schema.

    4.1.3.5 Stored model data must validate at:
            http://www.hropenstandards.org/?page=CertificationTesting        

```
